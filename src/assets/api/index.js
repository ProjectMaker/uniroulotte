import axios from 'axios'

const devUrl = "http://localhost:4040"
const prodUrl = "http://api.uni-roulotte.fr"

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json'
  }
  if (localStorage.getItem('user')) {
    headers['authorization'] = `Token ${JSON.parse(localStorage.getItem('user')).token}`
  }
  return headers
}

export const http = axios.create({
  baseURL: devUrl || prodUrl,
  headers: {'Content-Type': 'application/json'}
})

export const getOptions = () => ({headers: getHeaders()})
