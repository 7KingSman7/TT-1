import { TProduct } from '../../features/store/productReducer'

export const filteredProducts = (product: TProduct[], categoryStr: string) => {
  return product?.filter(catName => catName.category === categoryStr)
}
