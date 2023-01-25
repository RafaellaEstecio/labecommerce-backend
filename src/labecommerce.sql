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
REPLACE INTO users (id, name, email,password)
VALUES('001', 'Kaio', 'kaio@email.com', 'kaio22');


-- Edit Product by id
-- mocke valores para editar um product
-- edite a linha baseada nos valores mockados

REPLACE INTO products (id, name, price, category)
VALUES('p01','Flauta', 80,'Sopro');

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
WHERE price >=100 AND price <=300;