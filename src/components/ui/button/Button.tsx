import { ReactNode } from 'react'
import { Link } from 'react-router'

interface ButtonProps {
  children: ReactNode // Button text or content
  size?: 'sm' | 'md' // Button size
  variant?: 'primary' | 'outline' | 'danger' | 'success' | 'warning' // Button variant
  startIcon?: ReactNode // Icon before the text
  endIcon?: ReactNode // Icon after the text
  onClick?: () => void // Click handler
  disabled?: boolean // Disabled state
  className?: string // Disabled state
  to?: string
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  startIcon,
  endIcon,
  onClick,
  className = '',
  disabled = false,
  to = null,
  href = null,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: 'px-4 py-3 text-sm',
    md: 'px-5 py-3.5 text-sm',
  }

  // Variant Classes
  const variantClasses = {
    primary:
      'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
    outline:
      'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
    danger:
      'bg-error-400 text-white shadow-theme-xs hover:bg-error-500 disabled:bg-error-300',
    success:
      'bg-success-400 text-white shadow-theme-xs hover:bg-success-500 disabled:bg-success-300',
    warning:
      'bg-warning-400 text-white shadow-theme-xs hover:bg-warning-500 disabled:bg-warning-300',
  }

  if (to != null) {
    return (
      <Link
        to={to}
        className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg transition ${className} ${
          sizeClasses[size]
        } ${variantClasses[variant]} ${
          disabled ? 'cursor-not-allowed opacity-50' : ''
        }`}
        onClick={onClick}
      >
        {startIcon && <span className='flex items-center'>{startIcon}</span>}
        {children}
        {endIcon && <span className='flex items-center'>{endIcon}</span>}
      </Link>
    )
  } else if (href != null) {
    return (
      <a
        href={href}
        target='_blank'
        className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg transition ${className} ${
          sizeClasses[size]
        } ${variantClasses[variant]} ${
          disabled ? 'cursor-not-allowed opacity-50' : ''
        }`}
        onClick={onClick}
      >
        {startIcon && <span className='flex items-center'>{startIcon}</span>}
        {children}
        {endIcon && <span className='flex items-center'>{endIcon}</span>}
      </a>
    )
  } else {
    return (
      <button
        className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg transition ${className} ${
          sizeClasses[size]
        } ${variantClasses[variant]} ${
          disabled ? 'cursor-not-allowed opacity-50' : ''
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {startIcon && <span className='flex items-center'>{startIcon}</span>}
        {children}
        {endIcon && <span className='flex items-center'>{endIcon}</span>}
      </button>
    )
  }
}

export default Button
