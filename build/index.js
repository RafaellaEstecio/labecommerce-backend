"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get('/users', (req, res) => {
    res.status(200).send(database_1.users);
});
app.get('/products', (req, res) => {
    res.status(200).send(database_1.products);
});
const port = 3333;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
app.get('/products/search', (req, res) => {
    const q = req.query.q;
    const result = database_1.products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase());
    });
    if (result.length > 0) {
        res.status(200).send({
            data: result
        });
    }
    else {
        res.status(404).send({
            message: 'Produto não encontrado'
        });
    }
});
app.post('/users', (req, res) => {
    const { id, name, age } = req.body;
    const newUser = {
        id,
        name,
        age
    };
    database_1.users.push(newUser);
    res.status(201).send("Usuario registrado com sucesso!");
});
app.post('/products', (req, res) => {
    const { id, name, price } = req.body;
    const newProduct = {
        id,
        name,
        price
    };
    database_1.products.push(newProduct);
    res.status(201).send("Produto registrado com sucesso!");
});
app.post('/purchases', (req, res) => {
    const { userId, productId, quantity, totalPrice } = req.body;
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    };
    database_1.purchases.push(newPurchase);
    res.status(201).send("Compra registrada com sucesso!");
});
//# sourceMappingURL=index.js.map