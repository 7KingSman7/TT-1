import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/store/store'
import { getProductsAction } from '../../../features/store/productReducer'
import { useGetProductsQuery } from '../../../shared/bd/bd'
import { NavigationMenu } from '../widgets/nav-bar'

export const Catalog = () => {
  const { data } = useGetProductsQuery()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useAppSelector(state => state.products.cartItems)

  const productMap = new Map()

  useEffect(() => {
    if (data) {
      dispatch(getProductsAction({ products: data }))
    }
  }, [data, dispatch])

  // Функции для открытия и закрытия корзины
  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  cartItems.forEach(item => {
    if (!productMap.has(item.id)) {
      productMap.set(item.id, { ...item, count: 1 })
    } else {
      const product = productMap.get(item.id)
      productMap.set(item.id, { ...product, count: product.count + 1 })
    }
  })

  console.log(productMap)

  return (
    <>
      <NavigationMenu onClick={toggleCart} cartItems={cartItems} />

      <h1 className='w-full h-max p-10 text-center font-bold text-4xl'>
        Добро пожаловать в гипермаркет!
      </h1>

      <div>
        <motion.div
          className='absolute bg-slate-100 top-21 right-0 min-w-sm border-1 rounded-sm'
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ type: 'tween', stiffness: 300 }}
        >
          <h3 className='text-2xl font-bold p-3 text-center'>Корзина</h3>
          <hr />
          <ul className='p-2 text-lg'>
            {[...productMap].map(([key, value]) => {
              console.log(key, value)
              return (
                <li key={key} className='p-1 border-1 rounded-sm my-1'>
                  <div>
                    {value.name} <br />
                    <span>
                      {' '}
                      Количество: {value.count} шт по {value.price} <i>Руб.</i>
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
          <hr />
          <p className='text-red-500 text-center p-3 text-xl'>
            Итого:{' '}
            {cartItems
              .reduce((acc, item) => {
                return acc + item.price
              }, 0)
              .toFixed(2)}{' '}
            <i>Руб.</i>
          </p>
        </motion.div>
      </div>
      <Outlet />
    </>
  )
}
