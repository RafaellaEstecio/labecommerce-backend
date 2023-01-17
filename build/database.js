"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.product = exports.user = void 0;
const types_1 = require("./types");
exports.user = [
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
    }
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
//# sourceMappingURL=database.js.map