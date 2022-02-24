interface Product {
  uuid: string,
  category_uuid: string,
  title: string,
  price: number,
  description: string,
  metadata: {
    image: string,
    brand: string
  },
  category: {
    uuid: string,
    title: string,
    slug: string,
    created_at: string,
    updated_at: string
  },
  brand: {
    uuid: string,
    title: string,
    slug: string,
    created_at: string,
    updated_at: string
  }
  created_at: string,
  updated_at: string,
  deleted_at: string | null
}

export default Product;
