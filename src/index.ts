import express, { Request, Response } from 'express'
import cors from 'cors'
import { products, purchases, users } from './database'
import { TProducts, TPurchases, TUsers } from './types'

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3333, () => {
    console.log("servidor iniciado")
})

// Get All Users
// não precisa de validação, basta refatorar para o uso do try/catch


app.get("/users/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = users.find((user) => user.id === id)
        
        if(result){
            res.status(200).send(result)
        }else {
            res.status(404).send('Usuário não encontrado')
        }
    } catch (error: any) {
        console.log(error)
        res.status(500).send(error)
    }

})

// Get All Products
// não precisa de validação, basta refatorar para o uso do try/catch

app.get("/product/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = products.find((product) =>product.id === id)
        
        if(result){
            res.status(200).send(result)
        }else {
            res.status(404).send('Produto não encontrado')
        }
    } catch (error: any) {
        console.log(error)
        res.status(500).send(error)
    }

})

app.get('/products/search', (req: Request, res: Response) => {
    const q = req.query.q as string
    
    if(q){
        const result = products.filter((product) => {
            return product.name.toLowerCase().includes(q.toLowerCase())
        })
        res.status(200).send({
            data: result
        })
    } else {
        res.status(400).send("Digite um termo para busca")
    }

})

// Create User
// validar o body
// extra:
// não deve ser possível criar mais de uma conta com a mesma id
// não deve ser possível criar mais de uma conta com o mesmo e-mail


app.put('/users', (req: Request, res: Response) => {

    const newId = req.body.id as string
    const newEmail = req.body.email as string
    const newName = req.body.name as string
    const newAge = req.body.age as number
    const resultId = users.find( user => user.id === newId )
    const resultEmail = users.find( user => user.email === newEmail )


    if(!resultId && !resultEmail){
        let novoUsuario:TUsers = {
            id: newId,
            name: newName,
            age: newAge,
            email: newEmail
        }
        users.push(novoUsuario)

        res.status(200).send("Cadastro realizado com sucesso")
    } else {
        res.status(404).send("ID ou email já cadastrado")
    }
    
})

// Create Product
// validar o body
// extra:
// não deve ser possível criar mais de um produto com a mesma id

app.put('/products', (req: Request, res: Response) => {

    const newId = req.body.id as string
    const newName = req.body.name as string
    const newPrice = req.body.price as number
    const resultId = products.find( product => product.id === newId )
    


    if(!resultId){
        let novoProduct:TProducts = {
            id: newId,
            name: newName,
            price: newPrice
           
        }
        products.push(novoProduct)

        res.status(200).send("Produto cadastrado com sucesso")
    } else {
        res.status(404).send("Produto já cadastrado")
    }
    
})

// Create Purchase
// validar o body
// extra:
// id do usuário que fez a compra deve existir no array de usuários cadastrados
// id do produto que foi comprado deve existir no array de produtos cadastrados
// a quantidade e o total da compra devem estar com o cálculo correto

app.put('/purchases', (req: Request, res: Response) => {

    const newUserId = req.body.userId as string
    const newProductId = req.body.productId as string
    const newQuantity = req.body.quantity as number
    const newTotalPrice = req.body.totalPrice as number
    const resultadoUserId = users.find( user => user.id === newUserId )
    const resultadoProductId = products.find( product => product.id === newProductId )

    


    if(resultadoProductId && resultadoUserId){
        let novoPurchase:TPurchases = {
            userId: newUserId,
            productId: newProductId,
            quantity: newQuantity,
            totalPrice: newTotalPrice
           
        }
        purchases.push(novoPurchase)

        res.status(200).send("Compra realizada com sucesso")
    } else {
        res.status(404).send("Produto ou usuario não cadastrado")
    }
    
})

// Delete User by id
// validar que o usuário existe

app.delete("/users", (req: Request, res:Response)=>{
    const id = req.body.id as string

    const userIndex = users.findIndex((user)=>{
        return user.id === id
    })
      console.log("Index: ", userIndex)
    if(userIndex >0){
        users.splice(userIndex,1)
        res.status(200).send("Usuario deletado com sucesso")
    }else {
        res.status(404).send("Usuario não encontrado")
    }   
})

// Delete Product by id
// validar que o produto existe

app.delete("/products", (req: Request, res:Response)=>{
    const id = req.body.id as string

    const productIndex = products.findIndex((product)=>{
        return product.id === id
    })
      console.log("Index: ", productIndex)
    if(productIndex >0){
        products.splice(productIndex,1)
        res.status(200).send("Produto deletado com sucesso")
    }else {
        res.status(404).send("Produto não encontrado")
    }   
})

// Edit User by id
// validar que o usuário existe
// validar o body

app.put("/users/:id", (req: Request, res:Response)=>{
    const id = req.params.id
    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newAge = req.body.age as number | undefined
    const newEmail = req.body.email as string | undefined
    const user = users.find((user)=>{
        return user.id === id
    })
    if (user){
        user.id = newId || user.id
        user.name = newName || user.name
        user.age = newAge || user.age
        user.email = newEmail || user.email

        res.status(200).send("Usuario atualizado com sucesso")
    }else{
        res.status(404).send("Usuario não encontrado")
    }
    
})

