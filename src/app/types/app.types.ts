
export interface INewUser {
  name: string
  email: string
  password: string
}

export interface IUser {
  email: string
  password: string
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  images: string
  category: string
}

export interface IProductData {
  products: IProduct[]
}

export interface IProductSingle {
  product: IProduct
}

export interface ICartItem {
  id: number
  product: IProduct
  quantity: number
  price: number
}

export interface ICartItemsProps {
  id: number
  quantity: number
}

export interface ShoppingCartContext {
  increaseQuantity: (id: number) => void
  getItemQuantity: (id: number) => number
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  //getProduct: (id: string) => void
  user: INewUser
  products: IProduct[]
  reviews: IReview[]
  cartQuantity: number
  cartItems: ICartItemsProps[]
}

export interface IOrder {
  userEmail: string
  userAddress: string
  orderItems: string
  orderPrice: number
}

export interface IReview {
  review: string
  userName: string
  productId: number
}