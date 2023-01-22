import express, { Request, Response } from 'express'
import cors from 'cors'
import { products, purchases, users } from './database'
import { TProducts, TPurchase, TUsers } from './types'

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3333, () => {
    console.log("servidor iniciado")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

// //retorna todos os usuários cadastrados
// app.get('/users', (req: Request, res: Response) => {
//     res.status(200).send(users)
// })

// //mocke um novo usuário
// //insere o item mockado na tabela users

// app.post('/users', (req: Request, res: Response) => {

//     //const {id, name, age} = req.body as TUsers
//     const newUser = {
//         id: "u005",
//         name: "Tobias",
//         age: 21
//     }
//     users.push(newUser)
//     res.status(201).send("Usuario registrado com sucesso!")
// })

// Get All Users
// retorna o resultado ordenado pela coluna email em ordem crescente
app.get('/users', (req: Request, res: Response) => {
    let arrayOrdenado = users.sort((a: TUsers, b: TUsers) => {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0
    });
    res.status(200).send(arrayOrdenado)
})


// //retorna todos os produtos cadastrados
// app.get('/products', (req: Request, res: Response) => {
//     res.status(200).send(products)
// })

//mocke um novo produto
//insere o item mockado na tabela products
// app.post('/products', (req: Request, res: Response) => {
//     ////const {id, name, price} = req.body as TProducts
//     const newProduct = {
//         id: "p005",
//         name: "Tuba",
//         price: 21
//     }
//     products.push(newProduct)
//     res.status(201).send("Produto registrado com sucesso!")
// })

//mocke um termo de busca, por exemplo "monitor"
//retorna o resultado baseado no termo de busca
app.get('/products/search', (req: Request, res: Response) => {
    //// const q = req.query.q as string
    const q = "teclado";

    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
    res.status(200).send({
        data: result
    })

})

// //mocke uma id
// //busca baseada no valor mockado
// app.get("/users/:id", (req: Request, res: Response) => {
//     const id = "u001"

//     const result = users.filter((user) => {
//         return user.id.includes(id)
//     })
//     res.status(200).send({
//         data: result
//     })

// })

// //Delete User by id
// //mocke uma id
// //delete a linha baseada no valor mockado
// app.delete("/users/:id", (req: Request, res: Response) => {
//     // const id = req.params.id as string
//     const id = "u002"

//     const accountIndex = users.findIndex((user) => {
//         return user.id === id
//     })
//     console.log("Index: ", accountIndex)
//     if (accountIndex >= 0) {
//         users.splice(accountIndex, 1)
//         res.status(200).send("Usuario deletado com sucesso")
//     } else {
//         res.status(404).send("Usuario não encontrado")
//     }
// })

// Edit User by id
// mocke valores para editar um user
// edite a linha baseada nos valores mockados
app.put("/users/:id", (req: Request, res: Response) => {
    const id = "u003"
    const newId = "u009"
    const newName = "Bob"
    const newAge = 33

    const user = users.find((user) => {
        return user.id === id
    })
    if (user) {
        user.id = newId
        user.name = newName
        user.age = newAge

        res.status(200).send("Usuario atualizado com sucesso")
    } else {
        res.status(404).send("Usuario não encontrado")
    }

})


// // Delete Product by id
// // mocke uma id
// // delete a linha baseada no valor mockado
// app.delete("/products/:id", (req: Request, res: Response) => {
//     // const id = req.params.id as string
//     const id = "p002"

//     const accountIndex = products.findIndex((product) => {
//         return product.id === id
//     })
//     console.log("Index: ", accountIndex)
//     if (accountIndex >= 0) {
//         products.splice(accountIndex, 1)
//         res.status(200).send("Produto deletado com sucesso")
//     } else {
//         res.status(404).send("Produto não encontrado")
//     }
// })



// Edit Product by id
// mocke valores para editar um product
// edite a linha baseada nos valores mockados

app.put("/products/:id", (req: Request, res: Response) => {
    const id = "p003"
    const newId = "p009"
    const newName = "Bamdolim"
    const newPrice = 33

    const product = products.find((product) => {
        return product.id === id
    })
    if (product) {
        product.id = newId
        product.name = newName
        product.price = newPrice

        res.status(200).send("Produto atualizado com sucesso")
    } else {
        res.status(404).send("Produto não encontrado")
    }

})
// retorna o resultado ordenado pela coluna price em ordem crescente
// limite o resultado em 20 iniciando pelo primeiro item

// app.get('/products', (req: Request, res: Response) => {
//     let arrayCrescente = products.sort((a: TProducts, b: TProducts)  => {
//         if(a.price < b.price)
//             return -1;
//         if(a.price > b.price)
//             return 1;
//         return 0
//     });
//     res.status(200).send(arrayCrescente)
// })

// mocke um intervalo de preços, por exemplo entre 100.00 e 300.00
// retorna os produtos com preços dentro do intervalo mockado em ordem crescente

app.get('/products', (req: Request, res: Response) => {

    const arrayFilter = products.filter((product) => {
         return product.price >= 100 && product.price <= 300
         
    })

    if (arrayFilter) {
        return res.status(200).send(arrayFilter)
    } else {
        res.status(404).send("Produto(s) não encontrado(s)")
    }

})
