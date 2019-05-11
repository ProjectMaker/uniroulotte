import {
  SIGNIN_USER,
  SIGNOUT_USER,
  RETRIEVE_CURRENT_USER,
} from '../../constants'


export const signinUser = (email, password) => {
  return {
    type: SIGNIN_USER,
    credentials: {
      email,
      password
    }
  }
}

export const retrieveCurrentUser = () => {
  return {
    type: RETRIEVE_CURRENT_USER
  }
}

export const signoutUser = () => {
  return {
    type: SIGNOUT_USER
  }
}
