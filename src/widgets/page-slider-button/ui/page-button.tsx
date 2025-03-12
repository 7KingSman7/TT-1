import { CustomButton } from '../../../pages/main-page/widgets/button'

type Props = {
  onClickPrev: () => void
  onClickNext: () => void
  currentPage: number
  totalPage: number
}

export const PageButton = ({
  onClickPrev,
  onClickNext,
  currentPage = 1,
  totalPage = 1,
}: Props) => {
  return (
    <div className='flex w-max  justify-between px-3 py-2 items-center mx-auto mt-4'>
      <CustomButton onClick={onClickPrev}>Предыдущая</CustomButton>
      <span className='text-xl mx-2'>
        Страница {currentPage} из {totalPage}
      </span>
      <CustomButton onClick={onClickNext}>Следующая</CustomButton>
    </div>
  )
}
