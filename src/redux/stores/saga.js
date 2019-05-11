import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import jwtDecode from 'jwt-decode'

import {login} from '../../api/user'
import {list, sendDemand} from '../../api/quotation'
import localstorage from '../../api/localstorage'
import {
  SIGNIN_USER,
  RETRIEVE_CURRENT_USER,
  SIGNOUT_USER ,
  FETCH_QUOTATIONS,
  SEND_SIMULATION,
  SEND_SIMULATION_START,
  SEND_SIMULATION_SUCCESS,
  SEND_SIMULATION_ERROR
} from '../../constants'
import {
  signinUserSuccess,
  signinUserError,
  retrieveCurrentUserSuccess,
  signoutUserSuccess
} from '../actions/user-actions'
import {
  fetchQuotationsSuccess,
  fetchQuotationsError
} from "../actions/quotation-actions"

const fetchUser = async (credentials) => {
  let error, token = null
  try {
    token = await login(credentials)
  } catch (err) {
    error = err
  }
  return {error, token}
}

const callQuotationsList = async () => {
  let error, quotations = null
  try {
    quotations = await list()
  } catch (err) {
    error = err
  }
  return {error, quotations}
}

const sendSimulationFromApi = async (firstname, lastname, email, phoneNumber, price, detail) => {
  let error = null
  try {
    await sendDemand(email, firstname, lastname, phoneNumber, price, detail)
  } catch (err) {
    error = 'Erreur système'
  }
  return {error}
}

export default function* rootSaga() {
  yield all([signinUser(), retrieveCurrentUser(), signoutUser(), fetchQuotations(), sendSimulation()])
}

export function* signinUser() {
  yield takeEvery(SIGNIN_USER, makeSigninUser)
}

export function* signoutUser() {
  yield takeEvery(SIGNOUT_USER, makeSignoutUser)
}

export function* retrieveCurrentUser() {
  yield takeEvery(RETRIEVE_CURRENT_USER, makeRetrieveCurrentUser)
}

export function* fetchQuotations() {
  yield takeEvery(FETCH_QUOTATIONS, makeFetchQuotations)
}

export function* sendSimulation() {
  yield takeEvery(SEND_SIMULATION, makeSendSimulation)
}
export function* makeSigninUser({type, credentials}) {
  const {error, token} = yield call(fetchUser, credentials)
  if (error) {
    if (error.response && error.response.status === 404) {
      yield put(signinUserError('Utilisateur non trouvé'))
    } else {
      yield put(signinUserError('Erreur système'))
    }
  } else {
    const user = jwtDecode(token)
    yield localstorage.addCurrentUser(user)
    yield put(signinUserSuccess(user))
    yield put(push('/list'))
  }
}

export function* makeSignoutUser() {
  yield localstorage.clear()
  yield put(signoutUserSuccess())
  yield put(push('/account/login'))
}

export function* makeRetrieveCurrentUser() {
  const user = yield localstorage.getCurrentUser()
  yield put(retrieveCurrentUserSuccess(user))
}

export function* makeFetchQuotations() {
  const {error, quotations} = yield call(callQuotationsList)
  if (error) {
    yield put(fetchQuotationsError('Erreur système'))
  } else {
    yield put(fetchQuotationsSuccess(quotations))
  }
}

export function* makeSendSimulation({type, user}) {
  yield put({type: SEND_SIMULATION_START})

  const {firstname, lastname, email, phoneNumber} = user
  const simulation = yield select((state) => state.simulator)
  const {area, equipments, windows, door, roofing, price} = simulation
  const detail = {area, equipments, windows, door, roofing}
  const {error} = yield call(sendSimulationFromApi, firstname, lastname, email, phoneNumber, price.toLocaleString(), detail)
  if (error) {
    yield put({type: SEND_SIMULATION_ERROR, error})
  } else {
    yield put({type: SEND_SIMULATION_SUCCESS})
    yield put(push('/confirm'))
  }
}
