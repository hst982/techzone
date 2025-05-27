import PageMeta from '@/components/common/PageMeta'
import PageBreadcrumb from '@/features/dashboard/components/PageBreadCrumb'
import ProductsList from '@/features/dashboard/components/Inventory/ProductsList'

type ProdItem = {
  id: string
  name: string
  quantity: number
  photo: string
  price: number
  status: 'active' | 'inactive'
}

const productList: ProdItem[] = [
  {
    id: 'IP16PRM',
    name: 'iPhone 16 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 29000000,
    status: 'active',
  },
  {
    id: 'IP15PRM',
    name: 'iPhone 15 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 22000000,
    status: 'inactive',
  },
  {
    id: 'IP14PRM',
    name: 'iPhone 14 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 18000000,
    status: 'active',
  },
  {
    id: 'IP13PRM',
    name: 'iPhone 13 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 15000000,
    status: 'inactive',
  },
  {
    id: 'IP12PRM',
    name: 'iPhone 12 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 12000000,
    status: 'active',
  },
  {
    id: 'IP11PRM',
    name: 'iPhone 11 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 10000000,
    status: 'inactive',
  },

  {
    id: 'IP10PRM',
    name: 'iPhone 10 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 8000000,
    status: 'active',
  },

  {
    id: 'IP9PRM',
    name: 'iPhone 9 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 6000000,
    status: 'inactive',
  },

  {
    id: 'IP8PRM',
    name: 'iPhone 8 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 4000000,
    status: 'active',
  },

  {
    id: 'IP7PRM',
    name: 'iPhone 7 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 2000000,
    status: 'inactive',
  },

  {
    id: 'IP6PRM',
    name: 'iPhone 6 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 1000000,
    status: 'active',
  },

  {
    id: 'IP5PRM',
    name: 'iPhone 5 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 500000,
    status: 'inactive',
  },

  {
    id: 'IP4PRM',
    name: 'iPhone 4 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 100000,
    status: 'active',
  },

  {
    id: 'IP3PRM',
    name: 'iPhone 3 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 50000,
    status: 'inactive',
  },

  {
    id: 'IP2PRM',
    name: 'iPhone 2 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 10000,
    status: 'active',
  },

  {
    id: 'IP1PRM',
    name: 'iPhone 1 Pro Max',
    quantity: 20,
    photo:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 5000,
    status: 'inactive',
  },
]

function Inventory() {
  return (
    <div>
      <PageMeta
        title='Admin | Inventory'
        description='Manage your inventory with ease.'
      />
      <PageBreadcrumb pageTitle='Inventory' />
      <div className='space-y-5 sm:space-y-6'>
        <ProductsList data={productList} />
      </div>
    </div>
  )
}

export default Inventory
