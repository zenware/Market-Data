import type { StockQuote } from '../../shared/api'

export const STOCK_QUOTE_REQUEST = 'STOCK_QUOTE_REQUEST' as const
export const STOCK_QUOTE_SUCCESS = 'STOCK_QUOTE_SUCCESS' as const
export const STOCK_QUOTE_FAILURE = 'STOCK_QUOTE_FAILURE' as const

export interface StockState {
  quote: StockQuote | null
  loading: boolean
  error: string | null
}

const initialState: StockState = {
  quote: null,
  loading: false,
  error: null
}

export interface StockQuoteRequestAction {
  type: typeof STOCK_QUOTE_REQUEST
}

export interface StockQuoteSuccessAction {
  type: typeof STOCK_QUOTE_SUCCESS
  payload: StockQuote
}

export interface StockQuoteFailureAction {
  type: typeof STOCK_QUOTE_FAILURE
  error: string
}

export type StockAction =
  | StockQuoteRequestAction
  | StockQuoteSuccessAction
  | StockQuoteFailureAction

const stock = (state: StockState = initialState, action: StockAction): StockState => {
  switch (action.type) {
    case STOCK_QUOTE_REQUEST:
      return { ...state, loading: true, error: null }
    case STOCK_QUOTE_SUCCESS:
      return { quote: action.payload, loading: false, error: null }
    case STOCK_QUOTE_FAILURE:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export default stock
