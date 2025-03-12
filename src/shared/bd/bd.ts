import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TProduct } from '../../features/store/productReducer'

export const productsApi = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: builder => ({
    getProducts: builder.query<TProduct[], void>({
      query: () => 'products',
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
