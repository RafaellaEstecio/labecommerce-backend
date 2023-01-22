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
app.listen(3333, () => {
    console.log("servidor iniciado");
});
app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get('/users', (req, res) => {
    res.status(200).send(database_1.users);
});
app.get('/products', (req, res) => {
    res.status(200).send(database_1.products);
});
app.get('/products/search', (req, res) => {
    const q = "teclado";
    const result = database_1.products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase());
    });
    res.status(200).send({
        data: result
    });
});
//# sourceMappingURL=index.js.map