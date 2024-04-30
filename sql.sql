CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    login VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(50) NOT NULL
);


insert into usuarios (login, senha) values ('root', 'base');

