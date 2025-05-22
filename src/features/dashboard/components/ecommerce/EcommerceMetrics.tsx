import {
  ArrowDownIcon,
  ArrowUpIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export default function EcommerceMetrics() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6'>
      <div className='rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]'>
        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800'>
          <UsersIcon className='h-6 w-6 text-gray-800 dark:text-white/90' />
        </div>
        <div className='mt-5 flex items-end justify-between'>
          <div>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Customers
            </span>
            <h4 className='text-title-sm mt-2 font-extrabold text-gray-800 dark:text-white/90'>
              1.200
            </h4>
          </div>
          <span className='bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500 flex items-center gap-1 rounded-full py-0.5 pr-2.5 pl-2 text-sm font-medium'>
            <ArrowUpIcon className='h-4 w-4' />
            10%
          </span>
        </div>
      </div>
      <div className='rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]'>
        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800'>
          <InboxIcon className='h-6 w-6 text-gray-800 dark:text-white/90' />
        </div>
        <div className='mt-5 flex items-end justify-between'>
          <div>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Orders
            </span>
            <h4 className='text-title-sm mt-2 font-extrabold text-gray-800 dark:text-white/90'>
              3.612
            </h4>
          </div>
          <span className='bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500 flex items-center gap-1 rounded-full py-0.5 pr-2.5 pl-2 text-sm font-medium'>
            <ArrowDownIcon className='h-4 w-4' />
            30.85%
          </span>
        </div>
      </div>
    </div>
  )
}
