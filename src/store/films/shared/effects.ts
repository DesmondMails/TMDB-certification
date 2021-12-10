import { createEffect } from 'effector'
import { FilmsRequest } from '@/types/paramsTypes'
import api from '@/services/api'

export const fetchFilmsFX = (path: string) =>
  createEffect(async (params: FilmsRequest = {}) => {
    try {
      const response = await api.get(`/${path}`, { params })
      return response.data
    } catch (error) {
      return error
    }
  })
