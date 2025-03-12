import { TProduct } from '../../features/store/productReducer'

export const sortProducts = (arr: TProduct[]) => {
  return arr.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
}
