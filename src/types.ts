export type TUsers = {
    id: string,
    name: string,
    age: number,
    email: string
}

export type TProducts = {
    id: string,
    name: string,
    price: number
}

export type TPurchases = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number, 
  }
