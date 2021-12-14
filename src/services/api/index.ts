import axios, { AxiosError, AxiosRequestConfig } from 'axios'
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
  const authHeader = token
    ? `Bearer ${process.env.REACT_APP_MOVIE_DB_TOKEN}`
    : ''

  return {
    ...config,
    headers: {
      ...config.headers,
      ...(authHeader && { Authorization: authHeader }),
    },
  }
})

api.interceptors.response.use(
  (data) => data,
  (error: AxiosError) => {
    window.location.href = `/errors/${error.response?.status}`
  }
)

export default api
