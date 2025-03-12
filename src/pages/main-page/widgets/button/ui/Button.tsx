import React from 'react'

export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className='p-2 border-[1px] border-indigo-600 rounded-md bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white transition-colors hover:transform hover:scale-105'
    >
      {children}
    </button>
  )
}
