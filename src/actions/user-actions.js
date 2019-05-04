import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR,
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

export const signinUserError = (error) => {
  return {
    type: SIGNIN_USER_ERROR,
    error
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
