import { useState } from 'react'
import { TProduct } from '../../../../../features/store/productReducer'
import { CustomButton } from '../../button'
import { Links } from '../../links'

type Props = {
  onClick: () => void
  cartItems: TProduct[]
}

export const NavigationMenu = ({ onClick, cartItems }: Props) => {
  const initialState = {
    food: false,
    clothes: false,
    electronics: false,
  }

  const [activeLinks, setActiveLinks] = useState({
    food: false,
    clothes: false,
    electronics: false,
  })

  return (
    <nav className='w-full h-max flex justify-between p-6 border-1'>
      <Links
        className='text-2xl font-bold'
        href='/'
        nameHref='Гипермаркет!'
        onClick={() => setActiveLinks(initialState)}
      ></Links>

      <Links
        isActive={activeLinks.food}
        href='/food'
        nameHref='Еда'
        onClick={() =>
          setActiveLinks(prev => ({
            electronics: false,
            clothes: false,
            food: !prev.food,
          }))
        }
      ></Links>
      <Links
        isActive={activeLinks.clothes}
        href='/clothes'
        nameHref='Одежда'
        onClick={() =>
          setActiveLinks(prev => ({
            electronics: false,
            clothes: !prev.clothes,
            food: false,
          }))
        }
      ></Links>
      <Links
        isActive={activeLinks.electronics}
        href='/electronics'
        nameHref='Электроника'
        onClick={() =>
          setActiveLinks(prev => ({
            electronics: !prev.electronics,
            clothes: false,
            food: false,
          }))
        }
      ></Links>
      <CustomButton onClick={onClick}>
        <div className='relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-basket2'
            viewBox='0 0 16 16'
          >
            <path d='M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z' />
            <path d='M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z' />
          </svg>
          <div className='absolute -mt-9 font-bold text-sm text-white bg-amber-500 rounded-xl w-5 h-5 ml-3'>
            {cartItems?.length}
          </div>
        </div>
      </CustomButton>
    </nav>
  )
}
