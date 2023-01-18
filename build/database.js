"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchase = exports.product = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
];
exports.product = [
    {
        id: 'p001',
        name: 'calça',
        price: 100,
        category: types_1.category.CLOTHES_AND_SHOES
    },
    {
        id: 'p002',
        name: 'monitor',
        price: 1000,
        category: types_1.category.ELECTRONICS
    },
];
exports.purchase = [
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
];
function createUser(idNovo, emailNovo, passwordNovo) {
    exports.users.push({
        id: idNovo,
        email: emailNovo,
        password: passwordNovo
    });
    return "Cadastro realizado com sucesso";
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    exports.product.push({
        id: id,
        name: name,
        price: price,
        category: category
    });
    return "Produto cadastro realizado com sucesso";
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.product;
}
exports.getAllProducts = getAllProducts;
function getProductById(id) {
    let produto = exports.product.filter((p) => p.id === id);
    if (produto.length > 0) {
        return produto;
    }
    return undefined;
}
exports.getProductById = getProductById;
//# sourceMappingURL=database.js.map