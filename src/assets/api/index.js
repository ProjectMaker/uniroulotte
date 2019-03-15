import axios from 'axios'

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json'
  }

  return headers
}

export const http = axios.create({
  baseURL: __API_URL__, // eslint-disable-line no-undef
  headers: {'Content-Type': 'application/json'}
})

export const getOptions = () => ({withCredentials: true, headers: getHeaders()})
