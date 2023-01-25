import { TProducts, TUsers, TPurchases } from "./types"



export const users: TUsers[] = [
    {
        id: "u003",
        name: "Tatiana",
        age: 29,
        email: "tatiana@email.com"
    },
    {
        id: "u001",
        name: "Rafaella",
        age: 22,
        email: "rafaella@email.com"
    },
    {
        id: "u002",
        name: "Solange",
        age: 25,
        email: "solange@email.com"
    }
  
]

export const products: TProducts[] = [
    {
        id: "p001",
        name: "Teclado",
        price: 200
    },
    {
        id: "p002",
        name: "Guitarra",
        price: 2500
    },
    {
        id: "p003",
        name: "Violão",
        price: 2920
    }
]

export const purchases: TPurchases[] = [
     {

        userId: "u001",
        productId: "p002",
        quantity: 1,
        totalPrice: 2500, 
      }
]