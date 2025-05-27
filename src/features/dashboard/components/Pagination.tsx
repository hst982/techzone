import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

import Button from '@/components/ui/button/Button'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: PaginationProps) => {
  const getPages = () => {
    const pages = []
    const maxDisplayed = 5

    if (totalPages <= maxDisplayed) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  const pages = getPages()

  return (
    <div className={`navigation px-6 py-4 ${className}`}>
      <div className='flex items-center justify-between'>
        <Button
          variant='outline'
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className='flex items-center gap-1 rounded border px-3 py-1 text-sm hover:bg-gray-100 disabled:opacity-50'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          Previous
        </Button>

        {pages.map((page, idx) =>
          page === '...' ? (
            <span key={idx} className='px-2 text-sm text-gray-500'>
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              className={`rounded px-3 py-1 text-sm ${
                currentPage === page
                  ? 'bg-blue-100 font-semibold text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ),
        )}

        <Button
          variant='outline'
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className='flex items-center gap-1 rounded border px-3 py-1 text-sm hover:bg-gray-100 disabled:opacity-50'
        >
          Next
          <ArrowRightIcon className='h-5 w-5' />
        </Button>
      </div>
    </div>
  )
}
