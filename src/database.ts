import { TProduct, TPurchase, TUser, category} from "./types";



export const users: TUser[] = [
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
    },
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
 export function createUser(idNovo: string, emailNovo: string, passwordNovo: string){
    users.push(  {
        id:idNovo,
        email: emailNovo,
        password: passwordNovo
    });
    return "Cadastro realizado com sucesso"
 }

 export function getAllUsers():TUser[]{
    return users
 }

 export function createProduct(id: string, name: string, price: number, category: category){
    product.push(  {
        id:id,
        name:name,
        price:price,
        category:category
    });
    return "Produto cadastro realizado com sucesso"
 }

 export function getAllProducts():TProduct[]{
    return product
 }

 export function getProductById(id: string){
   let produto = product.filter((p) => p.id ===id)
   if(produto.length > 0){
    return produto 
   } 
   return undefined
   
 }

 export function queryProductsByName(name: string){
    let buscaNomeProduct = product.filter((q) => q.name.includes(name))
    if(buscaNomeProduct.length > 0){
        return buscaNomeProduct
       } 
       return undefined
 }

 export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number){
    purchase.push(  {
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice:  totalPrice
    });
    return "Compra realizada com sucesso"
 }

 export function getAllPurchasesFromUserId(userId: string){
    let userIdToSearch= purchase.filter((u) => u.userId ===userId)
    if(userIdToSearch.length > 0){
     return userIdToSearch
    } 
    return undefined
    
  }