import jwtDecode from 'jwt-decode'
import {login} from '../assets/api/user'

export const requestUser = () => {
  return {type: 'REQUEST_USER'}
}

export const receiveUser = (user) => {
  return {type: 'RECEIVE_USER', payload: user}
}

export const authenticateUser = (history) => (dispatch) => {
  dispatch(requestUser())
  const user = localStorage.getItem('user')
  if (user) {
    dispatch(receiveUser(JSON.parse(user)))
    history.push('/list')
  } else {
    dispatch(receiveUser({}))
    history.push('/account/login')
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
    .catch(err => console.log(err))
}
