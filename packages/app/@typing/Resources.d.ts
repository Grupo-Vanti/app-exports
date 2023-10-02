declare module 'App' {
  export type AllowedResourceType =
    | 'skus'
    | 'sku_lists'
    | 'prices'
    | 'coupons'
    | 'gift_cards'
    | 'customers'
    | 'customer_subscriptions'
    | 'tax_categories'
    | 'stock_items'
    | 'addresses'
    | 'bundles'
    | 'shipping_categories'
    | 'sku_options'
    | 'sku_list_items'
    | 'orders'
    | 'line_items'
    | 'payment_methods'
    | 'shipments'
    | 'shipping_methods'
    | 'transactions'

  export type ResourceWithRelationship =
    | 'bundles'
    | 'customer_subscriptions'
    | 'customers'
    | 'orders'
    | 'payment_methods'
    | 'prices'
    | 'shipments'
    | 'shipping_categories'
    | 'shipping_methods'
    | 'skus'
    | 'sku_lists'
    | 'sku_list_items'
    | 'stock_items'
    | 'tax_categories'
    | 'transactions'
}