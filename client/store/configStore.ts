import { applyMiddleware, createStore, type UnknownAction } from 'redux'
import { thunk, type ThunkAction, type ThunkDispatch } from 'redux-thunk'

import rootReducer, { type RootState } from '../reducers'

const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>
export type AppThunk = ThunkAction<Promise<void>, RootState, unknown, UnknownAction>

export default store
