import { createBrowserRouter } from 'react-router-dom'
import { ClothesPage } from '../../pages/clothes-page'
import { ElectronicsPage } from '../../pages/electronic-page'
import { FoodPage } from '../../pages/food-page'
import { MainPage } from '../../pages/main-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/food',
        element: <FoodPage />,
      },
      {
        path: '/clothes',
        element: <ClothesPage />,
      },
      {
        path: '/electronics',
        element: <ElectronicsPage />,
      },
    ],
  },
])
