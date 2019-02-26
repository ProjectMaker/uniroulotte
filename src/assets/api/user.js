import {http} from './index'

export const login = (email, password) => {
  return http.post('/account/login', {
    email,
    password
  })
    .then(resp => {
      const user = resp.data.user
      localStorage.setItem('user', JSON.stringify(user))
      return user
    })
}
