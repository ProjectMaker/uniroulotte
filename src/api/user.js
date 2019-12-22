import {http, getOptions} from './index'

export const login = ({email, password}) => {
  return http.post('/api/session', {
    email,
    password
  }, getOptions())
    .then(resp => resp.data.Authorization)
}

export const logout = () => {
  return http.get('/account/logout', {}, getOptions())
}
