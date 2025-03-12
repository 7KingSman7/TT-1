import { Link } from 'react-router-dom'

export const Links = ({
  href,
  nameHref,
  className,
  isActive,
  onClick,
}: {
  href: string
  nameHref: string
  className?: string
  isActive?: boolean
  onClick?: () => void
}) => {
  return (
    <Link
      onClick={onClick}
      className={`list-none border-b-2 ${className} ${
        isActive && 'text-indigo-600'
      }`}
      to={href}
    >
      {nameHref}
    </Link>
  )
}
