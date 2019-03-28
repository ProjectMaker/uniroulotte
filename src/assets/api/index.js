import axios from 'axios'

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json'
  }

  return headers
}
console.log(__API_URL__) // eslint-disable-line no-undef
export const http = axios.create({
  baseURL: __API_URL__ || 'http://localhost:8080', // eslint-disable-line no-undef
  headers: {'Content-Type': 'application/json'}
})

export const getOptions = () => ({withCredentials: true, headers: getHeaders()})
