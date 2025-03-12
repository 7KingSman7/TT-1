import { createAction, createReducer } from '@reduxjs/toolkit'

export type TProduct = {
  id: number
  name: string
  price: number
  category: string
}
type TCartItem = {
  id: number
  name: string
  price: number
  category: string
}

type TProductState = {
  products: TProduct[]
  currentPageFood: number
  totalPageFood: number
  currentPageClothes: number
  totalPageClothes: number
  currentPageElectronics: number
  totalPageElectronics: number
  cartItems: TCartItem[]
}

const initialState: TProductState = {
  products: [],
  currentPageFood: 1,
  totalPageFood: 0,
  currentPageClothes: 1,
  totalPageClothes: 0,
  currentPageElectronics: 1,
  totalPageElectronics: 0,
  cartItems: [],
}

export const getProductsAction = createAction<{ products: TProduct[] }>(
  'getProducts'
)

export const setCurrentPageFoodAction = createAction<{
  currentPageFood: number
}>('setCurrentPageFood')
export const setTotalPageFoodAction = createAction<{ totalPageFood: number }>(
  'setTotalPageFood'
)

export const setCurrentPageClothesAction = createAction<{
  currentPageClothes: number
}>('setCurrentPageClothes')
export const setTotalPageClothesAction = createAction<{
  totalPageClothes: number
}>('setTotalPageClothes')

export const setCurrentPageElectronicAction = createAction<{
  currentPageElectronic: number
}>('setCurrentPageElectronic')
export const setTotalPageElectronicAction = createAction<{
  totalPageElectronic: number
}>('setTotalPageElectronic')

export const setItemInCartAction = createAction<{
  cartItems: TCartItem
}>('setItemInCart')

export const deleteCartItemAction = createAction<{
  cartItems: TCartItem
}>('deleteCartItem')

export const productReducer = createReducer(initialState, builder => {
  builder.addCase(getProductsAction, (state, action) => {
    state.products = action.payload.products
  })
  builder.addCase(setCurrentPageFoodAction, (state, action) => {
    state.currentPageFood = action.payload.currentPageFood
  })
  builder.addCase(setTotalPageFoodAction, (state, action) => {
    state.totalPageFood = action.payload.totalPageFood
  })

  builder.addCase(setCurrentPageClothesAction, (state, action) => {
    state.currentPageClothes = action.payload.currentPageClothes
  })
  builder.addCase(setTotalPageClothesAction, (state, action) => {
    state.totalPageClothes = action.payload.totalPageClothes
  })

  builder.addCase(setCurrentPageElectronicAction, (state, action) => {
    state.currentPageElectronics = action.payload.currentPageElectronic
  })
  builder.addCase(setTotalPageElectronicAction, (state, action) => {
    state.totalPageElectronics = action.payload.totalPageElectronic
  })

  builder.addCase(setItemInCartAction, (state, action) => {
    // if (
    //   !state.cartItems.some(item => item.id === action.payload.cartItems.id)
    // ) {
    //   state.cartItems.push(action.payload.cartItems)
    // }

    state.cartItems.push(action.payload.cartItems)
  })
  builder.addCase(deleteCartItemAction, (state, action) => {
    state.cartItems.filter(item => item.id !== action.payload.cartItems.id)
  })
})
