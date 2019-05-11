import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import jwtDecode from 'jwt-decode'

import {login} from '../../api/user'
import {list, sendDemand} from '../../api/quotation'
import localstorage from '../../api/localstorage'
import {
  SIGNIN_USER,
  SIGNIN_USER_START,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR,
  RETRIEVE_CURRENT_USER,
  RETRIEVE_CURRENT_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  FETCH_QUOTATIONS,
  FETCH_QUOTATIONS_START,
  FETCH_QUOTATIONS_SUCCESS,
  FETCH_QUOTATIONS_ERROR,
  SEND_SIMULATION,
  SEND_SIMULATION_START,
  SEND_SIMULATION_SUCCESS,
  SEND_SIMULATION_ERROR
} from '../../constants'

const fetchUserFromApi = async (credentials) => {
  let error, token = null
  try {
    token = await login(credentials)
  } catch (err) {
    if (err.response && err.response.status === 404) {
      error = 'Utilisateur non trouvé'
    } else {
      error = 'Erreur système'
    }
  }
  return {error, token}
}

const fetchQuotationsFromApi = async () => {
  let error, quotations = null
  try {
    quotations = await list()
  } catch (err) {
    error = 'Erreur système'
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
  yield put({type: SIGNIN_USER_START})

  const {error, token} = yield call(fetchUserFromApi, credentials)
  if (error) {
    yield put({type: SIGNIN_USER_ERROR, error})
  } else {
    const user = jwtDecode(token)
    yield localstorage.addCurrentUser(user)
    yield put({type: SIGNIN_USER_SUCCESS, user})
    yield put(push('/list'))
  }
}

export function* makeSignoutUser() {
  yield localstorage.clear()
  yield put({type: SIGNOUT_USER_SUCCESS})
  yield put(push('/account/login'))
}

export function* makeRetrieveCurrentUser() {
  const user = yield localstorage.getCurrentUser()
  yield put({type: RETRIEVE_CURRENT_USER_SUCCESS, user})
}

export function* makeFetchQuotations() {
  yield put({type: FETCH_QUOTATIONS_START})

  const {error, quotations} = yield call(fetchQuotationsFromApi)
  if (error) {
    yield put({type: FETCH_QUOTATIONS_ERROR, error})
  } else {
    yield put({type: FETCH_QUOTATIONS_SUCCESS, quotations})
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
