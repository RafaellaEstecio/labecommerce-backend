export type TUsers = {
    id: string,
    name: string,
    age: number
}

export type TProducts = {
    id: string,
    name: string,
    price: number
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}