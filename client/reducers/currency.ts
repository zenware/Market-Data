import type { CurrencyRates } from '../../shared/api'

export const CURRENCY_RATES_REQUEST = 'CURRENCY_RATES_REQUEST' as const
export const CURRENCY_RATES_SUCCESS = 'CURRENCY_RATES_SUCCESS' as const
export const CURRENCY_RATES_FAILURE = 'CURRENCY_RATES_FAILURE' as const

export interface CurrencyState {
  rates: CurrencyRates | null
  loading: boolean
  error: string | null
}

const initialState: CurrencyState = {
  rates: null,
  loading: false,
  error: null
}

export interface CurrencyRatesRequestAction {
  type: typeof CURRENCY_RATES_REQUEST
}

export interface CurrencyRatesSuccessAction {
  type: typeof CURRENCY_RATES_SUCCESS
  payload: CurrencyRates
}

export interface CurrencyRatesFailureAction {
  type: typeof CURRENCY_RATES_FAILURE
  error: string
}

export type CurrencyAction =
  | CurrencyRatesRequestAction
  | CurrencyRatesSuccessAction
  | CurrencyRatesFailureAction

const currency = (state: CurrencyState = initialState, action: CurrencyAction): CurrencyState => {
  switch (action.type) {
    case CURRENCY_RATES_REQUEST:
      return { ...state, loading: true, error: null }
    case CURRENCY_RATES_SUCCESS:
      return { rates: action.payload, loading: false, error: null }
    case CURRENCY_RATES_FAILURE:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export default currency
