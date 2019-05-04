import { all, call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import jwtDecode from 'jwt-decode'

import {login} from '../api/user'
import localstorage from '../api/localstorage'
import { SIGNIN_USER, RETRIEVE_CURRENT_USER, SIGNOUT_USER } from '../constants'
import {
  signinUserSuccess,
  signinUserError,
  retrieveCurrentUserSuccess,
  signoutUserSuccess
} from '../actions/user-actions'

const fetchUser = async (credentials) => {
  let error, token = null
  try {
    token = await login(credentials)
  } catch (err) {
    error = err
  }
  return {error, token}
}

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
