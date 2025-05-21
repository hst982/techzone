import config from '@/configs'
import AddProduct from '@/features/dashboard/pages/AddProduct'
import Collections from '@/features/dashboard/pages/Collections'
import Dashboard from '@/features/dashboard/pages/Home'
import Orders from '@/features/dashboard/pages/Orders'
import Products from '@/features/dashboard/pages/Products'

const publicRoutes = []

const privateRoutes = [
  {
    path: config.routes.dashboard,
    component: Dashboard,
  },
  { path: config.routes.products, component: Products },
  { path: config.routes.addProduct, component: AddProduct },
  { path: config.routes.collections, component: Collections },
  { path: config.routes.orders, component: Orders },
]

export { publicRoutes, privateRoutes }
