import { combineReducers } from 'redux'

import counter from './counter'
import currency from './currency'
import stock from './stock'

const rootReducer = combineReducers({
    counter,
    currency,
    stock
})

export default rootReducer
