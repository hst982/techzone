import { ThemeToggleButton } from '@/components/common/ThemeToggleButton';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Header() {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
    console.log('toggleApplicationMenu', isApplicationMenuOpen);
  };

  return (
    <header className='sticky top-0 z-99999 flex w-full border-gray-200 bg-white lg:border-b dark:border-gray-800 dark:bg-gray-900'>
      <div className='flex grow flex-col items-center justify-between lg:flex-row lg:px-6'>
        <div className='flex w-full items-center justify-between gap-2 border-b border-gray-200 px-3 py-3 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4 dark:border-gray-800'>
          <button
            onClick={toggleApplicationMenu}
            className='z-99999 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-gray-200 text-gray-500 lg:h-11 lg:w-11 lg:border dark:border-gray-800'
          >
            <Bars3CenterLeftIcon className='h-6 w-6' />
          </button>
        </div>
        <div className='shadow-theme-md hidden w-full items-center justify-between gap-4 px-5 py-4 lg:flex lg:justify-end lg:px-0 lg:shadow-none'>
          <div className='2xsm:gap-3 flex items-center gap-2'>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
