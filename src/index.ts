import { users } from "./database";
import { product } from "./database";
import { purchase } from "./database";
import {createUser} from "./database";
import {getAllUsers} from "./database";
import {getAllProducts} from "./database";
import {createProduct} from "./database";
import { category } from "./types";
import {getProductById} from "./database";


console.log(users);
console.log(product);
console.log(purchase);
console.log(createUser("u003", "beltrano@email.com", "beltrano99"));
console.log(getAllUsers());
console.log(createProduct("p004", "Monitor HD", 800, category.ELECTRONICS));
console.log(getAllProducts());
console.log(getProductById('22'))


