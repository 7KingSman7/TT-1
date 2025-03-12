import { configureStore, createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { productReducer } from '../../features/store/productReducer'
import { productsApi } from '../../shared/bd/bd'

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getAPIMiddleware =>
    getAPIMiddleware().concat(productsApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const createAppSelector = createSelector.withTypes<AppState>()
