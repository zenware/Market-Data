import { combineReducers } from 'redux'

import currency, { type CurrencyState } from './currency'
import stock, { type StockState } from './stock'

const rootReducer = combineReducers({
  currency,
  stock
})

export interface RootState {
  currency: CurrencyState
  stock: StockState
}

export default rootReducer
