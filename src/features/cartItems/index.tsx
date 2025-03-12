import { useDispatch } from 'react-redux'
import { setItemInCartAction, TProduct } from '../store/productReducer'

type Props = {
  products: TProduct[]
}

export const CartItem = ({ products }: Props) => {
  const dispatch = useDispatch()

  return (
    <ul className='w-max max-w-[840px] grid gap-8 grid-cols-3 mx-auto'>
      {products.map(product => (
        <li
          key={product.id}
          className='min-h-28 flex flex-col h-max border rounded-sm w-full'
        >
          <img src='/public/no_image.png' alt='товар' className='w-full' />
          <header className='font-bold text-xl text-center min-h-12'>
            {product.name}
          </header>
          <p className='text-gray-500 text-sm min-h-5 '>{product.category}</p>
          <footer className='flex flex-row items-center p-4'>
            <button
              onClick={() =>
                dispatch(setItemInCartAction({ cartItems: product }))
              }
              className='p-2 border-[1px] border-indigo-600 rounded-md bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white transition-colors hover:transform hover:scale-105'
            >
              Купить
            </button>
            <span className='mb-0 text-end w-full block'>
              {product.price} <i>Руб.</i>
            </span>
          </footer>
        </li>
      ))}
    </ul>
  )
}
