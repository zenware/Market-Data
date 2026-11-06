import axios from 'axios'

import type { ApiError } from '../../shared/api'

export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError<ApiError>(error) && error.response?.data?.error) {
    return error.response.data.error
  }
  return error instanceof Error ? error.message : 'request failed'
}
