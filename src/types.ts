  export enum category {
    ACCESSORIES = "Acessórios",
    CLOTHES_AND_SHOES = "Roupas e calçados",
    ELECTRONICS = "Eletrônicos"
  }

  export type TUser = {
    id: string,
    email: string,
    password: string,
  }

  export type TProduct = {
    id: string,
    name: string,
    price: number,
    category: category, 
  }

  export type TPurchase = {

    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number, 
  }
