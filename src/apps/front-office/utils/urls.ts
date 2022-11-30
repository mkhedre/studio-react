const URLS = {
  home: '/',
  search: {
    route: '/search-results/:search',
    view: (search: string) => `/search-results/${search}`,
  },
  auth: {
    login: '/login',
    register: '/register',
    // forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    verifycode: '/verify-code',
    changePassword: '/my-account/change-password',
  },
  categories: {
    root: '/categories',
    viewRoot: '/categories/:id',
    view: (category: any) => `categories/${category.id}`,
  },
  aboutUs: '/about-us',
  contactUs: '/contact-us',
  joinUs: '/join-us',
  ProviderAccount: '/join-us/provider-account',
  companyAccount: '/join-us/company-account',
  privacyPolicy: '/privacy-policy',
  termsConditions: '/terms-conditions',

  // service providers || offices
  // best office => /offices/best
  offices: {
    root: '/offices',
    viewRoot: '/offices/:id',
    viewOffice: (office: any) => `/offices/${office.id}`,
  },
  // طلباتى
  orders: '/account/orders',
  viewOrderRoute: '/account/orders/:id',
  viewOrder: (order: any) => `/account/orders/${order.id}`,

  cart: '/cart',
  checkout: '/checkout',
  successCheckout: '/checkout/:id/success',
  viewSuccessCheckout: (order: any) => `/checkout/${order.id}/success`,
  failedCheckout: '/checkout/failed',
  wishlist: '/wishlist',
  account: {
    dashboard: '/account',

    returns: '/account/returns',
    viewReturnRoute: '/account/returns/:id',
    viewReturn: (order: any) => `/account/returns/${order.id}`,

    settings: '/account/settings',
    balance: '/account/balance',
    notifications: '/account/notifications',
    editProfile: '/account/edit-profile',
    changePassword: '/account/change-password',
  },
  sitemap: '/sitemap',
  pay: {
    checkout: '/checkout',
    bankAccounts: '/bank-accounts',
    bankTransfer: '/bank-transfer',
    ePay: '/e-pay',
    cart: '/cart',
    paymentSuccess: '/payment-success',
  },
  sessions: {
    root: '/sessions',
    viewRoot: '/sessions/:id',
    viewOffice: (session: any) => `/sessions/${session.id}`,
  },
  // عروض الاسعار
  Quotations: {
    root: '/Quotations',
    viewRoot: '/Quotations/id',
    viewOffice: (Quotation: any) => `/Quotations/${Quotation.id}`,
  },
  notFound: '/404',

  // append urls here, DO NOT remove this line
};

export default URLS;

// account: {
//   dashboard: '/account',
//   orders: '/account/orders',
//   viewOrderRoute: '/account/orders/:id',
//   viewOrder: (order: any) => `/account/orders/${order.id}`,

//   returns: '/account/returns',
//   viewReturnRoute: '/account/returns/:id',
//   viewReturn: (order: any) => `/account/returns/${order.id}`,

//   checkoutAddress: '/address/checkout',
//   addressBook: '/account/addresses',
//   addAddress: '/account/addresses/add',
//   viewAddressRoute: '/account/addresses/:id',
//   viewAddress: (address: any) => `/account/addresses/${address.id}`,

//   settings: '/account/settings',
//   balance: '/account/balance',
//   notifications: '/account/notifications',
//   editProfile: '/account/edit-profile',
//   changePassword: '/account/change-password',
// viewProductRoute: '/products/:id/:slug',
// viewProduct: (product: any) => `/products/${product.id}/${product.slug}`,

// viewBrandRoute: '/brand/:id/:slug',
// viewBrand: (brand: any) => `/brands/${brand.id}/${brand.slug}`,

// products: '/products',
// specials: '/products/specials',
// bestSeller: '/products/best-seller',
// brands: '/brands',
// checkoutAddress: '/address/checkout',
// addressBook: '/account/addresses',
// addAddress: '/account/addresses/add',
// viewAddressRoute: '/account/addresses/:id',
// viewAddress: (address: any) => `/account/addresses/${address.id}`,

// viewPageRoute: '/page/:slug',
// viewPage: (page: any) => `/page/${page.slug}`,
// },
