import axios from 'axios'

// const devUrl = "http://localhost:4040"
const prodUrl = "http://api.uni-roulotte.fr"

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json'
  }

  return headers
}

export const http = axios.create({
  baseURL: prodUrl,
  headers: {'Content-Type': 'application/json'}
})

export const getOptions = () => ({withCredentials: true, headers: getHeaders()})
