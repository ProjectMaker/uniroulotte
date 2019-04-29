import {http, getOptions} from './index'

export const login = ({email, password}) => {
  return http.post('/account/login', {
    email,
    password
  }, getOptions())
    .then(resp => resp.data.token)
}

export const logout = () => {
  return http.get('/account/logout', {}, getOptions())
}
