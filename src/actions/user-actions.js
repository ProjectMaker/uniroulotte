import jwtDecode from 'jwt-decode'
import {login} from '../api/user'

import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  RETRIEVE_CURRENT_USER,
  RETRIEVE_CURRENT_USER_SUCCESS
} from '../constants'


export const signinUser = (email, password) => {
  return {
    type: SIGNIN_USER,
    credentials: {
      email,
      password
    }
  }
}

export const signinUserSuccess = (user) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    user
  }
}

export const retrieveCurrentUser = () => {
  return {
    type: RETRIEVE_CURRENT_USER
  }
}

export const retrieveCurrentUserSuccess = (user) => {
  return {
    type: RETRIEVE_CURRENT_USER_SUCCESS,
    user
  }
}

export const signoutUser = () => {
  return {
    type: SIGNOUT_USER
  }
}

export const signoutUserSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS
  }
}

export const requestUser = () => {
  return {type: 'REQUEST_USER'}
}

export const receiveUser = (user) => {
  return {type: 'RECEIVE_USER', payload: user}
}

export const signinError = (error) => {
  return {type: 'SIGNIN_ERROR', payload: error}
}

/*
export const siginUser = (email, password, ownProps) => (dispatch) => {
  dispatch(requestUser())
  login(email, password)
    .then(token => {
      const user = jwtDecode(token)
      dispatch(receiveUser(user))
      localStorage.setItem('user', JSON.stringify(user))
      ownProps.history.push('/list')
    })
    .catch(err => {
      dispatch(signinError('Authentification impossible'))
    })
}
*/
