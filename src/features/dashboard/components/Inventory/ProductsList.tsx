import {
  AdjustmentsHorizontalIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Badge from '@/features/dashboard/components/ui/badge/Badge'
import { formatCurrency } from '@/utils/formatCurrency'
import Button from '@/components/ui/button/Button'
import { CardBox, CardHeader } from '@/features/dashboard/components/CardBox'
import SearchBox from '@/features/dashboard/components/Search'
import { useState } from 'react'
import Checkbox from '@/features/dashboard/components/form/input/Checkbox'

type dataType = {
  id: string
  name: string
  quantity: number
  photo: string
  price: number
  status: 'active' | 'inactive'
}

type ProductsListProps = {
  data: dataType[]
}

export default function ProductsList(data: ProductsListProps) {
  const [isCheckedAll, setIsCheckedAll] = useState(true)
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(
      (prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id) // bỏ đi nếu đã tick
          : [...prev, id], // thêm vào nếu chưa tick
    )
  }
  return (
    <CardBox>
      <CardHeader title='Products List'>
        <div className={`flex flex-col gap-3 sm:flex-row sm:items-center`}>
          <SearchBox />
          <div className='flex items-center gap-3'>
            <Button variant='outline' size='sm'>
              <AdjustmentsHorizontalIcon className='h-5 w-5' />
              filter
            </Button>
            <Button to='/admin/inventory/add_news' variant='success' size='sm'>
              <PlusIcon className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </CardHeader>
      <div className='custom-scrollbar max-w-full overflow-x-auto'>
        {data.data.length === 0 ? (
          <div>
            <p className='text-center text-gray-500 dark:text-gray-400'>
              No products found.
            </p>
          </div>
        ) : (
          <Table className='min-w-full'>
            {/* Table Header */}
            <TableHeader className='border-y border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900'>
              <TableRow>
                <TableCell className='px-6 py-3 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <label
                      htmlFor='checkAll'
                      className='flex cursor-pointer items-center gap-3'
                    >
                      <Checkbox
                        id='checkAll'
                        checked={isCheckedAll}
                        onChange={setIsCheckedAll}
                      />
                      <span className='text-theme-xs font-medium text-gray-500 dark:text-gray-400'>
                        Product ID
                      </span>
                    </label>
                  </div>
                </TableCell>
                <TableCell className='px-6 py-3 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <span className='text-theme-xs font-medium text-gray-500 dark:text-gray-400'>
                      Product Name
                    </span>
                  </div>
                </TableCell>
                <TableCell className='px-6 py-3 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <span className='text-theme-xs font-medium text-gray-500 dark:text-gray-400'>
                      Quantity
                    </span>
                  </div>
                </TableCell>
                <TableCell className='px-6 py-3 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <span className='text-theme-xs font-medium text-gray-500 dark:text-gray-400'>
                      Photo
                    </span>
                  </div>
                </TableCell>
                <TableCell className='px-6 py-3 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <span className='text-theme-xs font-medium text-gray-500 dark:text-gray-400'>
                      Price
                    </span>
                  </div>
                </TableCell>
                <TableCell className='px-6 py-3 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <span className='text-theme-xs font-medium text-gray-500 dark:text-gray-400'>
                      Status
                    </span>
                  </div>
                </TableCell>
                <TableCell className='px-6 py-3 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <span className='text-theme-xs font-medium text-gray-500 dark:text-gray-400'>
                      Actions
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            </TableHeader>
            {/* Table Body */}
            <TableBody className='divide-y divide-gray-100 font-sans dark:divide-gray-800'>
              {data.data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className='px-5 py-4 sm:px-6'>
                    <div className='flex items-center'>
                      <Checkbox
                        id={item.id}
                        checked={checkedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        label={item.id}
                      />
                    </div>
                  </TableCell>
                  <TableCell className='px-5 py-4 sm:px-6'>
                    <span className='text-theme-sm mb-0.5 block font-medium text-gray-700 dark:text-gray-400'>
                      {item.name}
                    </span>
                  </TableCell>
                  <TableCell className='px-5 py-4 sm:px-6'>
                    <span className='text-theme-sm mb-0.5 block font-medium text-gray-700 dark:text-gray-400'>
                      20
                    </span>
                  </TableCell>
                  <TableCell className='px-5 py-4 sm:px-6'>
                    <div className='flex'>
                      <img
                        src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png'
                        alt={item.name}
                        className='h-10 w-10 rounded-md object-cover'
                      />
                    </div>
                  </TableCell>
                  <TableCell className='px-5 py-4 sm:px-6'>
                    <span className='text-theme-sm mb-0.5 block font-medium text-gray-700 dark:text-gray-400'>
                      {formatCurrency(item.price)}
                    </span>
                  </TableCell>
                  <TableCell className='px-5 py-4 sm:px-6'>
                    <Badge
                      color={item.status === 'active' ? 'success' : 'error'}
                      variant='light'
                      size='md'
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='px-5 py-4 sm:px-6'>
                    <div className='flex flex-wrap gap-2'>
                      <Button
                        size='sm'
                        to={`/admin/products/edit/${item.id}`}
                        className='!px-2.5 !py-2'
                      >
                        <PencilIcon className='h-5 w-5' />
                      </Button>
                      <Button
                        size='sm'
                        variant='danger'
                        className='!px-2.5 !py-2'
                      >
                        <TrashIcon className='h-5 w-5' />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </CardBox>
  )
}
