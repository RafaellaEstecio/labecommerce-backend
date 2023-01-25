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
app.get("/users/:id", (req, res) => {
    try {
        const id = req.params.id;
        const result = database_1.users.find((user) => user.id === id);
        res.status(200).send('result');
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
//# sourceMappingURL=index.js.map