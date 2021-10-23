# URL Shortener End-Point

## Projeto

Trata-se de um endpoint para encurtamento de urls utilizando Typescript, Node.js, MongoDB e Docker para subir banco de dados.

## Desafios

Revisitei algumas vezes a documentação do docker e docker-compose uma vez que não tinha mais acesso ao Mongo Atlas de maneira gratuita. Com algumas informações consegui criar o arquivo docker-compose com os dados necessários para subir e logar em um banco de dados mongoDB.

Para inserir variáveis de ambiente em meu docker-compose file utilizei comandos através do Makefile, tornando o projeto mais seguro, uma vez que os dados sensíveis não são disponibilizados nesse repositório.

## Como rodar

Primeiro deve-se rodar o comando para instalar todas as dependências

```Bash
  npm install
```

Para subir o container com o banco de dados e com as variáveis de ambiente rode o comando

```Bash
  make up
```

Para rodar e iniciar o servidor utilize

```Bash
  npm run dev
```

Devem aparecer logs indicando o sucesso da conexão com o banco e indicando que está pronto para o uso

## Rotas disponíveis

### /shortner

  - POST: Recebe um corpo em formato JSON e retorna os dados da URL encurtada.

### /:hash

 - GET: Recebe pelo parâmetro o HASH do link encurtado e retorna do banco de dados o link original devolvendo um redirecionamento para o link desejado.


