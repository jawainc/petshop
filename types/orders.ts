interface Orders {
  uuid: string,
  products: [{
    uuid: string,
    price: number,
    product: string,
    quantity: number
  }],
  address: {
    billing: string,
    shipping: string
  },
  delivery_fee: number,
  amount: number,
  shipped_at: string | null,
  order_status: [{
    uuid: string,
    title: string,
    created_at: string,
    updated_at: string
  }],
  created_at: string,
  updated_at: string
}

export default Orders;
