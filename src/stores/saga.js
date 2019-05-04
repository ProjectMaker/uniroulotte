import { all, call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import jwtDecode from 'jwt-decode'

import {login} from '../api/user'
import localstorage from '../api/localstorage'
import { SIGNIN_USER, RETRIEVE_CURRENT_USER, SIGNOUT_USER } from '../constants'
import {signinUserSuccess, retrieveCurrentUserSuccess, signoutUserSuccess} from '../actions/user-actions'

export default function* rootSaga() {
  yield all([signinUser(), retrieveCurrentUser(), signoutUser()])
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

export function* makeSigninUser({type, credentials}) {
  const token = yield call(login, credentials)
  const user = jwtDecode(token)
  yield localstorage.addCurrentUser(user)
  yield put(signinUserSuccess(user))
  yield put(push('/list'))
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
