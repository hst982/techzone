import config from '@/configs'
import Home from '@/features/client/layouts/Home'
import AddProduct from '@/features/dashboard/pages/Products/AddProduct'
import Collections from '@/features/dashboard/pages/Collections'
import Dashboard from '@/features/dashboard/pages/Dashboard/Home'
import Orders from '@/features/dashboard/pages/Orders'
import Inventory from '@/features/dashboard/pages/Products/Inventory'
import { DashboardLayout, MainLayout } from '@/layouts'

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: MainLayout },
]

const privateRoutes = [
  {
    path: config.routes.dashboard,
    component: Dashboard,
    layout: DashboardLayout,
  },
  {
    path: config.routes.inventory,
    component: Inventory,
    layout: DashboardLayout,
  },
  {
    path: config.routes.addInventory,
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
