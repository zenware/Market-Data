import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../reducers'
import type { AppDispatch } from './configStore'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
