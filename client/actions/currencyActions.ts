import axios from 'axios'

import type { CurrencyRates } from '../../shared/api'
import {
  CURRENCY_RATES_FAILURE,
  CURRENCY_RATES_REQUEST,
  CURRENCY_RATES_SUCCESS
} from '../reducers/currency'
import type { AppThunk } from '../store/configStore'
import { getErrorMessage } from './getErrorMessage'

export const getRates = (base: string): AppThunk => async (dispatch) => {
  dispatch({ type: CURRENCY_RATES_REQUEST })

  try {
    const response = await axios.get<CurrencyRates>(`/v1/currency/${encodeURIComponent(base)}`)
    dispatch({ type: CURRENCY_RATES_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: CURRENCY_RATES_FAILURE, error: getErrorMessage(error) })
  }
}
