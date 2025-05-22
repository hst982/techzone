import { ThemeToggleButton } from '@/components/common/ThemeToggleButton'
import { useSidebar } from '@/features/dashboard/context/SidebarContext'
import {
  Bars3CenterLeftIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'

function Header() {
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar()
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false)

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar()
    } else {
      toggleMobileSidebar()
    }
  }

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen)
  }

  return (
    <header className='sticky top-0 z-99999 flex w-full border-gray-200 bg-white lg:border-b dark:border-gray-800 dark:bg-gray-900'>
      <div className='flex grow flex-col items-center justify-between lg:flex-row lg:px-6'>
        <div className='flex w-full items-center justify-between gap-2 border-b border-gray-200 px-3 py-3 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4 dark:border-gray-800'>
          <button
            onClick={handleToggle}
            className={`z-99999 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-gray-200 text-gray-500 lg:h-11 lg:w-11 lg:border dark:border-gray-800 ${isMobileOpen ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
          >
            {isMobileOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3CenterLeftIcon className='h-6 w-6' />
            )}
          </button>
          <div className='logo_text font-logo text-3xl font-bold tracking-wider lg:hidden'>
            TechZone
          </div>
          <button
            className={`${isApplicationMenuOpen ? 'bg-gray-100 dark:bg-gray-800' : ''} z-99999 flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-800`}
            onClick={toggleApplicationMenu}
          >
            <EllipsisHorizontalIcon className='h-6 w-6 text-gray-400' />
          </button>
        </div>
        <div
          className={`${isApplicationMenuOpen ? 'flex' : 'hidden'} shadow-theme-md w-full items-center justify-between gap-4 px-5 py-4 lg:flex lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className='2xsm:gap-3 flex items-center gap-2'>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
