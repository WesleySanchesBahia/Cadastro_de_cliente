```markdown
# 🧠 API REST de Gestão de Clientes

Este é um projeto backend desenvolvido com **Node.js**, **Express** e **Sequelize**, que oferece uma API RESTful para gerenciar **clientes**, **contatos**, **usuários**, **sessões de login** e **upload de arquivos**.

---

## 🚀 Funcionalidades

- ✅ Autenticação JWT
- ✅ CRUD de Clientes
- ✅ CRUD de Contatos relacionados a Clientes
- ✅ CRUD de Usuários
- ✅ Upload de Arquivos com Multer
- ✅ Proteção de rotas com middleware
- ✅ Validações com Yup

---

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── controllers/
│   ├── models/
├── config/
│   ├── auth.js
│   ├── database.js
│   ├── multer.js
├── database/
│   ├── migrations/
│   └── index.js
├── tmp/               # Pasta para uploads temporários
├── app.js             # Configurações do Express
├── routes.js          # Todas as rotas da aplicação
└── server.js          # Arquivo principal para iniciar o servidor
```

---

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`**
   ```env
   APP_SECRET=sua_chave_jwt
   PORT=3333
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASS=senha
   DB_NAME=seu_banco
   ```

4. **Configure o banco de dados com Sequelize**
   ```bash
   npx sequelize db:create
   npx sequelize db:migrate
   ```

5. **Inicie o servidor**
   ```bash
   npm run dev
   ```

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize + PostgreSQL
- JWT (Autenticação)
- Multer (Upload de arquivos)
- Yup (Validação)
- Sucrase + Nodemon (Ambiente de desenvolvimento)

---

## 🔐 Rotas Protegidas

Após o login com `POST /sessions`, o token JWT deve ser enviado no header `Authorization` como:

```
Authorization: Bearer <seu_token>
```

---

## 🧪 Exemplos de Endpoints

### Autenticação

```http
POST /sessions
Body: { "email": "", "password": "" }
```

### Clientes

```http
GET /customers
POST /customers
PUT /customers/:id
DELETE /customers/:id
```

### Contatos

```http
GET /customers/:customerId/contacts
POST /customers/:customerId/contacts
PUT /customers/:customerId/contacts/:id
DELETE /customers/:customerId/contacts/:id
```

### Upload de Arquivos

```http
POST /file
Form-data: { file: <arquivo> }
```

---

## 🧑‍💻 Scripts úteis

- `npm run dev`: Inicia o servidor com Nodemon + Sucrase
- `npx sequelize db:migrate`: Executa as migrations

---

## 📌 Observações

- Certifique-se de que a pasta `tmp/` existe para upload de arquivos.
- O middleware de autenticação está aplicado a todas as rotas após `/sessions`.

---
