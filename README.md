# Exercício Tópicos Especiais (livros-api)

Exercício em node js, utilizando as ferramentas express, sequelize, e db em mysql.

### Recursos instalados

```
npm install express --save
npm install --save-dev nodemon
npm install --save sequelize
npm install --save mysql2
npm install --save-dev sequelize-cli
```

### Configurando o Sequelize

```sh
npx sequelize-cli init
```

Alterar o arquivo config/config.json com a seguinte configuração: 

```sh
"development": {
    "username": "root",
    "password": "",
    "database": "livros",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
```

Após, execute os comandos para criar o arquivo de migração e migrar.

```sh
npx sequelize-cli model:generate --name Livro --attributes name:string,autor:string,ano:integer,editora:string,edicao:string
npx sequelize-cli db:migrate
```

Alterar o arquivo package.json, incluindo o sript:

```sh
"scripts": {
	"start": "nodemon app.js"
},
```

Após, execute :)
``` 
npm start
```
