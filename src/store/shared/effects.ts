import api from '@/services/api'
import { FilmsRequest, RequestParams } from '@/types/paramsTypes'
import { createEffect } from 'effector'

export const fetchSingleCallback = async (
  path: string,
  params?: RequestParams
) => {
  const response = await api.get(`/${path}${params?.id ?? ''}`)

  return response.data
}

export const fetchFX = async (path: string, params: RequestParams = {}) => {
  try {
    const response = await api.get(`/${path}`, { params })
    return response.data
  } catch (error) {
    return error
  }
}
