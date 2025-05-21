interface RouterPaths {
  home: string

  //   nhóm Dashboard
  dashboard: string
  //   nhóm sản phẩm
  products: string
  addProduct: string
  collections: string
  addCollection: string
  giftCards: string
  addGiftCard: string
  category: string
  addCategory: string

  orders: string

  discounts: string
  addDiscount: string

  customers: string
  addCustomer: string
}

const routes: Readonly<RouterPaths> = {
  home: '/',

  //   nhóm Dashboard
  dashboard: '/admin/dashboard',
  //   nhóm sản phẩm
  products: '/admin/products',
  addProduct: '/admin/products/add_news',
  collections: '/admin/collections',
  addCollection: '/admin/collections/add_news',
  giftCards: '/admin/gift_cards',
  addGiftCard: '/admin/gift_cards/add_news',
  category: '/admin/category',
  addCategory: '/admin/category/add_news',

  orders: '/admin/orders',

  discounts: '/admin/discounts',
  addDiscount: '/admin/discounts/add_news',

  customers: '/admin/customers',
  addCustomer: '/admin/customers/add-customer',
}

export default routes
