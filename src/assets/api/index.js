import axios from 'axios'

export const http = axios.create({
	baseURL: "http://api.uni-roulotte.fr",
	headers: {'Content-Type': 'application/json'}
})
