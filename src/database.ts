import { TProduct, TPurchase, TUser, category} from "./types";



export const user: TUser[] = [
    {
        id: 'u001',
        email: 'bruna@email.com',
        password: 'bruna123'
    },
    {
        id: 'u002',
        email: 'gabriel@email.com',
        password: 'gabriel123'
    }
]

export const product: TProduct[] = [
    {
        id: 'p001',
        name: 'calça',
        price: 100,
        category: category.CLOTHES_AND_SHOES
    },
    {
        id: 'p002',
        name: 'monitor',
        price: 1000,
        category: category.ELECTRONICS
    }
]

export const purchase: TPurchase[] = [
    {
        userId: 'u001',
        productId: 'p002',
        quantity: 1,
        totalPrice: 1000
    },
    {
        userId: 'u002',
        productId: 'p001',
        quantity: 2,
        totalPrice: 200
    }
]
