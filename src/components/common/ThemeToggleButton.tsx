import { useTheme } from '@/features/dashboard/context/ThemeContext'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='hover:text-dark-900 relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
    >
      <MoonIcon className='h-5 w-5 dark:hidden' />
      <SunIcon className='hidden h-5 w-5 dark:block' />
    </button>
  )
}
