-- Active: 1674669664616@@127.0.0.1@3306

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


 PRAGMA table_info ('users');

 PRAGMA table_info ('products');

 
SELECT * FROM users;


SELECT * FROM products;