import { TProduct } from '../../features/store/productReducer'

export const setPaginationProducts = (
  filteredArrProd: TProduct[],
  currentPage: number,
  itemsPerPage: number
) => {
  return filteredArrProd.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
}
