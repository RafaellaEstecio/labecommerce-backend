import { users } from "./database";
import { product } from "./database";
import { purchase } from "./database";
import {createUser} from "./database";
import {getAllUsers} from "./database";
import {getAllProducts} from "./database";
import {createProduct} from "./database";
import { category } from "./types";
import {getProductById} from "./database";
import {queryProductsByName} from "./database";
import {createPurchase} from "./database";
import {getAllPurchasesFromUserId} from "./database";





console.log(users);
console.log(product);
console.log(purchase);
console.log(createUser("u003", "beltrano@email.com", "beltrano99"));
console.log(getAllUsers());
console.log(createProduct("p004", "Monitor HD", 800, category.ELECTRONICS));
console.log(getAllProducts());
console.log(getProductById('p001'))
console.log(queryProductsByName("mo"))
console.log(createPurchase("u003", "p004", 2, 1600))
console.log(getAllPurchasesFromUserId("u003"))



