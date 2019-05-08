import { all, call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import jwtDecode from 'jwt-decode'

import {login} from '../../api/user'
import {list} from '../../api/quotation'
import localstorage from '../../api/localstorage'
import {
  SIGNIN_USER,
  RETRIEVE_CURRENT_USER,
  SIGNOUT_USER ,
  FETCH_QUOTATIONS
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

export default function* rootSaga() {
  yield all([signinUser(), retrieveCurrentUser(), signoutUser(), fetchQuotations()])
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
