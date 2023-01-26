-- Active: 1674672886649@@127.0.0.1@3306

-- nome da tabela: users
-- colunas da tabela:
-- id (TEXT, PK, único e obrigatório)
-- email (TEXT, único e obrigatório)
-- password (TEXT e obrigatório)

CREATE TABLE users (
    id INTEGER PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

-- b) Populando a tabela de pessoas usuárias
-- popule a tabela com pelo menos 3 users diferentes

INSERT INTO users(id, name, email, password)
VALUES
 ('001','Luiz', 'luiz@email.com','12aa'),
 ('002','Jorge', 'Jorge@email.com','12aa'),
 ('003','mariana', 'mariana@email.com','12aa');

-- a) Criação da tabela de produtos
-- nome da tabela: products
-- colunas da tabela:
-- id (TEXT, PK, único e obrigatório)
-- name (TEXT e obrigatório)
-- price (REAL e obrigatório)
-- category (TEXT e obrigatório)

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

-- b) Populando a tabela de produtos
-- popule a tabela com pelo menos 5 produtos diferentes

INSERT INTO products (id, name, price, category)
VALUES
 ('p01','Piano', 7000,'Teclas'),
 ('p02','Bateria', 4000,'Percussão'),
 ('p03','Guitarra', 2500,'Cordas');

-- Get All Users
-- retorna todos os usuários cadastrados
 PRAGMA table_info ('users');

-- Get All Products
-- retorna todos os produtos cadastrados
 PRAGMA table_info ('products');

 
SELECT * FROM users;


SELECT * FROM products;

-- Search Product by name
-- mocke um termo de busca, por exemplo "monitor"
-- retorna o resultado baseado no termo de busca

SELECT * FROM products
WHERE name = "Piano";


-- Create User
-- mocke um novo usuário
-- insere o item mockado na tabela users

INSERT INTO users(id, name, email, password)
VALUES
 ('004','Bruna', 'bruna@email.com','12aa');


-- Create Product
-- mocke um novo produto
-- insere o item mockado na tabela products
INSERT INTO products (id, name, price, category)
VALUES
 ('p04','Escaleta', 150,'Teclas');


--  Get Products by id
-- mocke uma id
-- busca baseada no valor mockado
SELECT * FROM products
WHERE id = "p01";


-- Delete User by id
-- mocke uma id
-- delete a linha baseada no valor mockado

SELECT * FROM users
WHERE id = "001";

-- Delete Product by id
-- mocke uma id
-- delete a linha baseada no valor mockado

DELETE FROM users
WHERE id = 001;

-- Edit User by id
-- mocke valores para editar um user
-- edite a linha baseada nos valores mockados

UPDATE users
SET
    name = "Kaio",
    email = "kaio@email.com",
    password = "kaio22"
WHERE id = "001";


-- Edit Product by id
-- mocke valores para editar um product
-- edite a linha baseada nos valores mockados

UPDATE products
SET
    name = "Flauta",
    price = 85,
    category = "sopro"
WHERE id = "p01";

-- Get All Users
-- retorna o resultado ordenado pela coluna email em ordem crescente
SELECT * FROM users
ORDER BY email ASC;

-- Get All Products versão 1
-- retorna o resultado ordenado pela coluna price em ordem crescente
-- limite o resultado em 20 iniciando pelo primeiro item
SELECT * FROM products
ORDER BY price ASC
LIMIT 20
OFFSET 0;

-- Get All Products versão 2
-- mocke um intervalo de preços, por exemplo entre 100.00 e 300.00
-- retorna os produtos com preços dentro do intervalo mockado em ordem crescente

SELECT * FROM products
WHERE price >= 100 AND price <= 300;

-- Criação da tabela de pedidos
-- nome da tabela: purchases
-- colunas da tabela:
-- id (TEXT, PK, único e obrigatório)
-- total_price (REAL e obrigatório)
-- paid (INTEGER e obrigatório)
-- delivered_at (TEXT e opcional)
-- buyer_id (TEXT, obrigatório e FK = referencia a coluna id da tabela users)

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT ,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users (id)
);

SELECT * FROM purchases;
-- a) Crie dois pedidos para cada usuário cadastrado
-- No mínimo 4 no total (ou seja, pelo menos 2 usuários diferentes) e 
-- devem iniciar com a data de entrega nula.
INSERT INTO purchases (id, total_price, paid, delivered_at, buyer_id)
VALUES
('101', 4000, 1, NULL,'002' ),
('102', 4000, 1, NULL,'003' ),
('103', 4000, 1, NULL,'002'),
('104', 4000, 1, NULL,'003' );

-- b) Edite o status da data de entrega de um pedido
-- Simule que o pedido foi entregue no exato momento da sua edição
--  (ou seja, data atual).

UPDATE purchases
SET
    delivered_at = DATE("now")
WHERE id = "101";

UPDATE purchases
SET
    delivered_at = DATETIME("now")
WHERE id <> "101";

-- Crie a query de consulta utilizando junção para simular um endpoint de histórico de compras de um determinado usuário.
-- Mocke um valor para a id do comprador, ela deve ser uma das que foram utilizadas no exercício 2.
SELECT * from users
INNER JOIN purchases
ON purchases.buyer_id =users.id
WHERE users.id = "002";

-- Criação da tabela de relações
-- nome da tabela: purchases_products
-- colunas da tabela:
-- purchase_id (TEXT e obrigatório, não deve ser único)
-- product_id (TEXT e obrigatório, não deve ser único)
-- quantity (INTEGER e obrigatório, não deve ser único)
CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL
);

-- Inserção dos dados
-- Popule sua tabela purchases_products simulando 3 compras de clientes.

-- Consulta com junção INNER JOIN
-- Mostre em uma query todas as colunas das tabelas relacionadas (purchases_products, purchases e products).

INSERT INTO purchases_products (purchase_id, product_id, quantity)
VALUES
('101','p01', 2 ),
('102', 'p02', 1 ),
('103','p02', 3 );

SELECT 
    * 
FROM 
    purchases AS pur
INNER JOIN purchases_products AS pur_pro ON pur.id = pur_pro.purchase_id
INNER JOIN products AS pro ON pro.id = pur_pro.product_id;


