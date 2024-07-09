export interface ProductResponse {
  id: number
  name: string
  desc: string
  stock: number
  price: number
  createdAt: string
  modifiedAt: string
  category: Category
}

interface Category {
  id: number
  name: string
}
