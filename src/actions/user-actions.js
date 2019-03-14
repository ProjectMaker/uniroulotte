import jwtDecode from 'jwt-decode'
import {login} from '../assets/api/user'

export const requestUser = () => {
  return {type: 'REQUEST_USER'}
}

export const receiveUser = (user) => {
  return {type: 'RECEIVE_USER', payload: user}
}

export const signinError = (error) => {
  return {type: 'SIGNIN_ERROR', payload: error}
}
export const authenticateUser = () => (dispatch) => {
  dispatch(requestUser())
  const user = localStorage.getItem('user')
  if (user) {
    dispatch(receiveUser(JSON.parse(user)))
  } else {
    dispatch(receiveUser(null))
  }
}
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

export const signoutUser = (history) => (dispatch) => {
  dispatch(receiveUser(null))
  localStorage.clear()
  history.push('/')
}
