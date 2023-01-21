import express, { Request, Response } from 'express'
import cors from 'cors'
import { products, purchases, users } from './database'
import { TProducts, TPurchase, TUsers } from './types'

const app = express();
app.use(express.json());
app.use(cors());



app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get('/users',(req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get('/products',(req: Request, res: Response) => {
    res.status(200).send(products)
})

const port = 3333;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

app.get('/products/search',(req: Request, res: Response) => {
    const q = req.query.q as string

    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase())
    })

    if(result.length>0){
        res.status(200).send({
            data: result
        })
    }else{
        res.status(404).send({
            message: 'Produto não encontrado'
        })
    }
})

app.post('/users', (req: Request, res: Response) => {
 

    const {id, name, age} = req.body as TUsers

    
    const newUser = {
        id,
        name,
        age
    }

    users.push(newUser)

    res.status(201).send("Usuario registrado com sucesso!")
})

app.post('/products', (req: Request, res: Response) => {
 

    const {id, name, price} = req.body as TProducts

    
    const newProduct = {
        id,
        name,
        price
    }

    products.push(newProduct)

    res.status(201).send("Produto registrado com sucesso!")
})

app.post('/purchases', (req: Request, res: Response) => {
 

    const {userId,
        productId,
        quantity,
        totalPrice} = req.body as TPurchase

    
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }

    purchases.push(newPurchase)

    res.status(201).send("Compra registrada com sucesso!")
})

