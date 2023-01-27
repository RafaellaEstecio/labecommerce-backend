import express, { Request, Response } from 'express'
import cors from 'cors'
import { db } from './database/knex'

const app = express()

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

app.listen(3333, () => {
  console.log(`Servidor rodando na porta ${3333}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

// Get All Users
// method HTTP (GET)
// path ("/users")
// response
// status 200
// array de users do arquivo .db

app.get("/users", async (req:Request, res:Response)=>{
    try{
        const result = await db.raw(`SELECT * FROM users`)

        res.status(200).send(result)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})


// Get All Products
// method HTTP (GET)
// path ("/products")
// response
// status 200
// array de products do arquivo .db

app.get("/products", async (req:Request, res:Response)=>{
    try{
        const result = await db.raw(`SELECT * FROM products`)

        res.status(200).send(result)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

// Search Product by name
// method HTTP (GET)
// path ("/product/search")
// query params
// q
// response
// status 200
// array do resultado da busca no arquivo .db

    app.get("/products/search", async (req:Request, res:Response)=>{
    
        try {
            const buscaName = req.body.name
    console.log(buscaName)
//const product entre chaves, assim : const [product] = bla significa q ele irá retornar apenas um item
    const product = await db.raw(`
            SELECT * FROM products
            WHERE name LIKE "%${buscaName}%";
        `)
            if (product) {
                res.status(200).send(product)
            } else {
                res.status(404)
                throw new Error("PRODUTO não encontrado");
    
            }
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    })


// Create User
// method HTTP (POST)
// path ("/users")
// body
// id
// name
// email
// password
// createdAt
// response
// status 201
// "Cadastro realizado com sucesso"

app.post("/users", async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const createdAt = req.body.createdAt


        if (typeof id !== "number") {
            res.status(400)
            throw new Error("'id' inválido, deve ser numero")
        }

        if (typeof name !== "string") {
            res.status(400)
            throw new Error("'name' inválido, deve ser string")
        }

        if (typeof email !== "string") {
            res.status(400)
            throw new Error("'email' inválido, deve ser string")
        }

        if (typeof password !== "string") {
            res.status(400)
            throw new Error("senha inválida, deve ser string")
        }

        if (typeof createdAt !== "string") {
            res.status(400)
            throw new Error("Data invalida")
        }

        if (id < 1 || name.length < 1 || email.length < 1 || password.length <1 || createdAt.length <1) {
            res.status(400)
            throw new Error("'id', 'name' , 'email' ou 'senha' devem possuir no mínimo 1 caractere")
        }

        await db.raw(`
            INSERT INTO users (id, name, email, password, created_at)
            VALUES (${id}, "${name}", "${email}","${password}", "${createdAt}");
        `)

        res.status(200).send("Usuário cadastrado com sucesso")
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})



// Create Product
// method HTTP (POST)
// path ("/products")
// body
// id
// name
// price
// description
// imageUrl
// response
// status 201
// "Produto cadastrado com sucesso"


app.post("/products", async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const imageUrl = req.body.imageUrl


        if (typeof id !== "string") {
            res.status(400)
            throw new Error("'id' inválido")
        }

        if (typeof name !== "string") {
            res.status(400)
            throw new Error("'name' inválido, deve ser string")
        }

        if (typeof price !== "number") {
            res.status(400)
            throw new Error("Preço deve ser um número")
        }

        if (typeof description !== "string") {
            res.status(400)
            throw new Error("descrição deve ser string")
        }

        if (typeof imageUrl !== "string") {
            res.status(400)
            throw new Error("Imagem deve ser string")
        }

        if (id.length < 1 || name.length < 1 || price < 1 || description.length <1 || imageUrl.length <1) {
            res.status(400)
            throw new Error("'id', 'price' , 'description' ou 'imageUrl' devem possuir no mínimo 1 caractere")
        }

        await db.raw(`
            INSERT INTO products (id, name, price, description, imageUrl)
            VALUES ("${id}", "${name}", ${price},"${description}", "${imageUrl}");
        `)

        res.status(200).send("Produto cadastrado com sucesso")
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})





// Create Purchase
// method HTTP (POST)
// path ("/purchases")
// body
// id
// buyer
// totalPrice
// createdAt
// paid
// response
// status 201
// "Compra cadastrada com sucesso"

app.post("/purchases", async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const buyer = req.body.buyer
        const totalPrice = req.body.totalPrice
        const createdAt = req.body.createdAt
        const paid = req.body.paid


        if (typeof id !== "string") {
            res.status(400)
            throw new Error("'id' inválido deve ser uma string")
        }

        if (typeof buyer !== "number") {
            res.status(400)
            throw new Error("'buyer' inválido")
        }

        if (typeof totalPrice !== "number") {
            res.status(400)
            throw new Error("'totalPrice' inválido, deve ser numero")
        }

        if (typeof createdAt !== "string") {
            res.status(400)
            throw new Error("Data invalida")
        }

        if (typeof paid !== "number") {
            res.status(400)
            throw new Error("senha inválida, deve ser string")
        }

        if (id.length < 1 || buyer < 1 || totalPrice < 1 || paid < 1 || createdAt.length <1) {
            res.status(400)
            throw new Error("'id', 'buyer' , 'totalPrice' ou 'paid' devem possuir no mínimo 1 caractere")
        }

        await db.raw(`
            INSERT INTO purchases (id, buyer, totalPrice, paid, createdAt)
            VALUES ("${id}", ${buyer}, ${totalPrice},${paid}, "${createdAt}");
        `)

        res.status(201).send("Compra cadastrada com sucesso")
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})



// Get Products by id
// method HTTP (GET)
// path ("/products/:id")
// response
// status 200
// objeto encontrado do arquivo .db

app.get("/products/:id", async (req:Request, res:Response)=>{
    
        try {
            const buscaId = req.params.id
    
            const [product] = await db.raw(`
            SELECT * FROM products
            WHERE id = "${buscaId}";
        `)
            if (product) {
                res.status(200).send(product)
            } else {
                res.status(404)
                throw new Error("PRODUTO não encontrado");
    
            }
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    })

// Get User Purchases by User id
// method HTTP (GET)
// path ("/users/:id/purchases")
// response
// status 200
// array de compras do user no arquivo .db

app.get("/users/:id/purchases", async (req:Request, res:Response)=>{
    
    try {
        const buscaPurchasesUser = req.params.id

        const purchasesUser = await db.raw(`
        SELECT * FROM purchases
        WHERE buyer = "${buscaPurchasesUser}";
    `)
        if (purchasesUser) {
            res.status(200).send(purchasesUser)
        } else {
            res.status(404)
            throw new Error("Compra não encontrada");

        }
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})