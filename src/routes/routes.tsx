import config from '@/configs'
import Home from '@/features/client/layouts/Home'
import AddProduct from '@/features/dashboard/pages/AddProduct'
import Collections from '@/features/dashboard/pages/Collections'
import Dashboard from '@/features/dashboard/pages/Home'
import Orders from '@/features/dashboard/pages/Orders'
import Products from '@/features/dashboard/pages/Products'
import { DashboardLayout, MainLayout } from '@/layouts'

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: MainLayout },
]

const privateRoutes = [
  {
    path: config.routes.dashboard,
    component: Dashboard,
  },
  {
    path: config.routes.products,
    component: Products,
    layout: DashboardLayout,
  },
  {
    path: config.routes.addProduct,
    component: AddProduct,
    layout: DashboardLayout,
  },
  {
    path: config.routes.collections,
    component: Collections,
    layout: DashboardLayout,
  },
  { path: config.routes.orders, component: Orders, layout: DashboardLayout },
]

export { publicRoutes, privateRoutes }
