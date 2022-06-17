## Passos para rodar o projeto em ambiente de desenvolvimento

Usando yarn para instalar as dependencias:

```bash
$ yarn
```

Criar um .env na raiz do projeto e substituir os valores com as informações corretas:

```bash
REACT_APP_MARVEL_API_URL=URL base para as requisições
REACT_APP_MARVEL_API_PUBLIC_KEY=Sua chave publica da Marvel API
REACT_APP_MARVEL_API_HASH=MD5 Hash da sua chave privada
REACT_APP_TIMESTAMP=Sequencia de digitos usado para criar o Hash
```

ps: você pode gerar seu hash [aqui](https://www.md5hashgenerator.com/) utilizando sua chave privada em conjunto com uma sequencia de numero

Exemplo de URL base utilizada: https://gateway.marvel.com/v1/public

Iniciar o projeto:

```bash
$ yarn start
```

## `Possiveis melhorias`

### `Quantidade de testes`

A quantidade de testes não está ideal para um projeto dessa complexidade, a minha ideia era criar muito mais testes, principalmente para as partes mais complexas que acabaram não sendo testadas, devido ao curto tempo.

Minha ideia é continuar adicionando os testes durante a semana, já que é uma parte super importante para projetos complexos.

### `Cache`

Seria interessante criar um sistema de cache, porem não foi feito devido a tarefas que eram mais essenciais para o projeto.

### `Mobile friendly`

Outro ponto que seria interessante é possibilitar usuarios mobile a utilizar o site(usando media queries, por exemplo)

### `Pagination`

Criar um sistema de pagination para poder ver mais heróis

## Tecnologias utilizadas

### - [Create React App](https://github.com/facebook/create-react-app)

### - [React Query](https://react-query.tanstack.com/)

### - [React-router-dom](https://reactrouter.com/)

### - [Axios](https://github.com/axios/axios)

### - [Testing-library](https://github.com/testing-library/react-testing-library)

### - [Vercel](https://vercel.com/)

## Scripts do projeto

### `yarn start`

Comando utilizado para iniciar o projeto em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no seu navegador.

### `yarn test`

Comando para rodar os testes unitarios do projeto

### `npm run build`

Cria uma versão de build do projeto

## Deploy

### `Ferramenta de deploy `

Foi usado o Vercel para hospedar o [site](https://luizalabs-challenge.vercel.app)
