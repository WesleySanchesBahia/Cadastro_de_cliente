# Documentação do Projeto CRUD de Customers

## Visão Geral
Este projeto é um CRUD (Create, Read, Update, Delete) que permite o gerenciamento de customers, incluindo o cadastro de contacts e users. A API é desenvolvida em Node.js com Express e utiliza Sequelize como ORM para interação com um banco de dados PostgreSQL. A autenticação é implementada com bcrypt para gerar tokens de acesso às rotas protegidas.

## Tecnologias Utilizadas
- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework para criação de APIs REST
- **Sequelize** - ORM para interação com PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **bcrypt** - Biblioteca para hashing de senhas
- **jsonwebtoken (JWT)** - Para autenticação e geração de tokens

## Estrutura do Projeto
```
project-root/
│-- src/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   ├── app.js
│-- database/
│-- .env
│-- package.json
```

## Configuração do Banco de Dados
Crie um arquivo `.env` na raiz do projeto e adicione as credenciais do seu banco de dados PostgreSQL:
```
DB_NAME=meu_banco
DB_USER=meu_usuario
DB_PASS=minha_senha
DB_HOST=localhost
DB_DIALECT=postgres
SECRET_KEY=minha_chave_secreta
```

## Instalação e Execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-repositorio.git
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute as migrações do banco de dados:
   ```sh
   npx sequelize db:migrate
   ```
4. Inicie a aplicação:
   ```sh
   npm start
   ```

## Endpoints da API

### Autenticação
- **POST /auth/login** - Autentica um usuário e retorna um token JWT.
  - Parâmetros:
    ```json
    {
      "email": "user@email.com",
      "password": "123456"
    }
    ```
  - Resposta:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
    }
    ```

### Customers
- **POST /customers** - Cria um novo customer.
- **GET /customers** - Retorna a lista de customers.
- **GET /customers/:id** - Retorna os detalhes de um customer.
- **PUT /customers/:id** - Atualiza um customer existente.
- **DELETE /customers/:id** - Remove um customer.

### Contacts
- **POST /contacts** - Cria um novo contato associado a um customer.
- **GET /contacts/:customerId** - Retorna os contatos de um customer.

### Users
- **POST /users** - Cria um novo usuário.
- **GET /users** - Lista todos os usuários.

## Middleware de Autenticação
Todas as rotas protegidas exigem um token JWT no cabeçalho `Authorization`. Exemplo:
```
Authorization: Bearer <seu_token_jwt>
```

## Considerações Finais
Este projeto serve como base para sistemas de gestão de customers e pode ser expandido conforme a necessidade. Caso precise de melhorias ou novas funcionalidades, sinta-se à vontade para contribuir!

