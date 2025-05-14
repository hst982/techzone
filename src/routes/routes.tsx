import config from '@/configs';
import AddProduct from '@/features/dashboard/pages/AddProduct';
import Collections from '@/features/dashboard/pages/Collections';
import Dashboard from '@/features/dashboard/pages/Home';
import Products from '@/features/dashboard/pages/Products';

const publicRoutes = [];

const privateRoutes = [
  {
    path: config.routes.dashboard,
    component: Dashboard,
  },
  { path: config.routes.products, component: Products },
  { path: config.routes.addProduct, component: AddProduct },
  { path: config.routes.collections, component: Collections },
  { path: config.routes.orders, component: AddProduct },
];

export { publicRoutes, privateRoutes };
