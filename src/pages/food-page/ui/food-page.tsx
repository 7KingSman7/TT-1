import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/store'
import { CartItem } from '../../../features/cartItems'
import {
  setCurrentPageFoodAction,
  setTotalPageFoodAction,
} from '../../../features/store/productReducer'
import { filteredProducts } from '../../../shared/utils/filter-products'
import { setPaginationProducts } from '../../../shared/utils/pagination-products'
import { sortProducts } from '../../../shared/utils/sort-products'
import { PageNavbar } from '../../../widgets/page-slider-button'

export const FoodPage = () => {
  const [isActive, setIsActive] = useState(false)
  const itemsPerPage = 6
  const dispatch = useAppDispatch()

  const product = useAppSelector(state => state.products.products)
  const currentPage = useAppSelector(state => state.products.currentPageClothes)

  useEffect(() => {
    if (product) {
      const totalPages = Math.ceil(
        product.filter(item => item.category === 'Одежда').length / itemsPerPage
      )
      dispatch(setTotalPageFoodAction({ totalPageFood: totalPages }))
    }
  }, [product, dispatch])

  const totalPage = useAppSelector(state => state.products.totalPageElectronics)

  const handlePagePrev = () => {
    if (currentPage > 1) {
      const newValue = currentPage - 1
      dispatch(setCurrentPageFoodAction({ currentPageFood: newValue }))
    }
  }

  const handlePageNext = () => {
    if (currentPage < totalPage) {
      const newValue = currentPage + 1
      dispatch(setCurrentPageFoodAction({ currentPageFood: newValue }))
    }
  }

  const filteredArrProd = filteredProducts(product, 'Еда')

  const paginatedProducts = setPaginationProducts(
    filteredArrProd,
    currentPage,
    itemsPerPage
  )

  const sortedProducts = sortProducts(filteredArrProd)

  const paginatedAndSortedProducts = setPaginationProducts(
    sortedProducts,
    currentPage,
    itemsPerPage
  )

  return (
    <>
      <h2 className='text-2xl font-bold p-6 text-center'>Электроника</h2>
      <div className='flex flex-row justify-around'>
        <aside className='px-10 flex flex-col'>
          <div>Сортировать по:</div>
          <div className='flex gap-2 items-center flex-row-reverse m-0 p-0'>
            <label htmlFor='name'>Названию</label>
            <input
              type='checkbox'
              id='name'
              onChange={() => setIsActive(!isActive)}
            />
          </div>
        </aside>

        {isActive ? (
          <CartItem products={paginatedAndSortedProducts} />
        ) : (
          <CartItem products={paginatedProducts} />
        )}
      </div>

      <PageNavbar
        onClickNext={handlePageNext}
        onClickPrev={handlePagePrev}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </>
  )
}
