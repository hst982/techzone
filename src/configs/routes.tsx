interface RouterPaths {
  home: string;

  //   nhóm Dashboard
  dashboard: string;
  //   nhóm sản phẩm
  products: string;
  addProduct: string;
  collections: string;
  addCollection: string;
  giftCards: string;
  addGiftCard: string;
  category: string;
  addCategory: string;

  orders: string;

  discounts: string;
  addDiscount: string;

  customers: string;
  addCustomer: string;
}

const routes: Readonly<RouterPaths> = {
  home: '/',

  //   nhóm Dashboard
  dashboard: '/admin/dashboard',
  //   nhóm sản phẩm
  products: '/admin/products',
  addProduct: '/admin/products/news',
  collections: '/admin/products/collections',
  addCollection: '/admin/products/collections/news',
  giftCards: '/admin/products/gift_cards',
  addGiftCard: '/admin/products/gift_cards/news',
  category: '/admin/products/category',
  addCategory: '/admin/products/category/news',

  orders: '/admin/orders',

  discounts: '/admin/discounts',
  addDiscount: '/admin/discounts/news',

  customers: '/admin/customers',
  addCustomer: '/admin/customers/add-customer',
};

export default routes;
