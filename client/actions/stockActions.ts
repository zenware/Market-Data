import axios from 'axios'

import type { StockQuote } from '../../shared/api'
import {
  STOCK_QUOTE_FAILURE,
  STOCK_QUOTE_REQUEST,
  STOCK_QUOTE_SUCCESS
} from '../reducers/stock'
import type { AppThunk } from '../store/configStore'
import { getErrorMessage } from './getErrorMessage'

export const getStockQuote = (symbol: string): AppThunk => async (dispatch) => {
  dispatch({ type: STOCK_QUOTE_REQUEST })

  try {
    const response = await axios.get<StockQuote>(`/v1/stock/${encodeURIComponent(symbol)}`)
    dispatch({ type: STOCK_QUOTE_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: STOCK_QUOTE_FAILURE, error: getErrorMessage(error) })
  }
}
