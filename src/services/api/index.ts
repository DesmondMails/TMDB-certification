import axios, { AxiosRequestConfig } from 'axios'
import { TOKEN_KEY } from '@/constants'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: `application/json, text/plain, */*`,
    'Content-type': `application/json;charset=utf-8`,
  },
  timeout: 30000,
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem(TOKEN_KEY)
  console.log('Here is movie db token', process.env.MOVIE_DB_TOKEN)
  console.log('Here is axios config', config)

  const authHeader = token
    ? `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmUwYWI4YmFhNzQ0MGY0YmI0OWVkOWNlODc2ZWY3NSIsInN1YiI6IjVmYWQ1YTFmOTdhNGU2MDAzZTg2MzBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mbXASQ52aa5B7KwUgCXRypZKEQbtCxwCXlD6ORyAk4g`
    : ''

  return {
    ...config,
    headers: {
      ...config.headers,
      ...(authHeader && { Authorization: authHeader }),
    },
  }
})

export default api
