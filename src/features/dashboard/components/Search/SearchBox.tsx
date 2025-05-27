import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchBox() {
  return (
    <form>
      <div className='relative'>
        <span className='pointer-events-none absolute top-1/2 left-4 -translate-y-1/2'>
          <MagnifyingGlassIcon className='h-5.5 w-5.5' />
        </span>
        <input
          type='text'
          placeholder='Search...'
          className='dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-10 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-[42px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-[300px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
        />
      </div>
    </form>
  )
}
