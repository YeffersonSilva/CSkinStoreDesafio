# CSkinStoreDesafio

Bem-vindo ao CSkinStoreDesafio! Este projeto é uma aplicação full-stack para listar e filtrar skins de CS:GO, utilizando Nest.js com Prisma e MongoDB no back-end e Next.js no front-end.



## Descrição

O CSkinStoreDesafio é uma aplicação que permite aos usuários visualizar, filtrar e ordenar skins de CS:GO. A aplicação foi desenvolvida com foco em uma arquitetura moderna e eficiente, utilizando as melhores práticas e ferramentas disponíveis.

![Título primario](https://github.com/user-attachments/assets/c4cb9ba2-2cf8-4c3b-90a1-d6bb786daaee)

## Tecnologias Utilizadas

- **Back-end:**
  - [Nest.js](https://nestjs.com/)
  - [Prisma ORM](https://www.prisma.io/)
  - [MongoDB](https://www.mongodb.com/)

- **Front-end:**
  - [Next.js](https://nextjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Chakra UI](https://chakra-ui.com/)

- **Contêineres:**
  - [Docker](https://www.docker.com/)

## Funcionalidades

### Back-end

1. **Rotas:**
   - `GET /items`: Retorna todas as skins salvas no banco de dados.
   - Suporte para filtragem por parâmetros como nome da skin, float, preço e categoria.
   - Opções de ordenação por preço ou float.

2. **Filtros:**
   - **Float:** Filtragem por faixa de valores (ex: 0.0 a 1.0).
   - **Preço:** Filtragem por faixa de preço (ex: R$10 a R$100).
   - **Categoria:** Filtragem por categorias como faca, pistola, rifle.

### Front-end

1. **Listagem de Skins:**
   - Interface que exibe as skins em cards ou lista com informações como nome, preço, float e categoria.

2. **Barra de Pesquisa:**
   - Permite buscar skins pelo nome.

3. **Filtros:**
   - Filtros interativos para float, preço e categoria, atualizando os resultados em tempo real.

4. **Ordenação:**
   - Componente para ordenar resultados por preço ou float.

## Instalação

### Back-end

1. Clone o repositório:

   ```bash
   git clone https://github.com/YeffersonSilva/CSkinStoreDesafio.git
   cd CSkinStoreDesafio
   ```

2. Instale as dependências:

   ```bash
   cd server
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`. Exemplo:

   ```env
   DATABASE_URL="mongodb://localhost:27017/cskinstore"
   ```

4. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:

   ```bash
   npm run start:dev
   ```

### Front-end

1. Navegue até o diretório front-end:

   ```bash
   cd client
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador em http://localhost:3000.

## Docker

Para simplificar a configuração e o desenvolvimento, o projeto inclui arquivos de configuração Docker para criar contêineres para o back-end e o banco de dados.

### Executando com Docker

1. Construir e iniciar os contêineres:

   Navegue até o diretório raiz do projeto e execute:

   ```bash
   docker-compose up --build
   ```

   Isso criará e iniciará os contêineres para o back-end e o MongoDB.

2. Acessar a aplicação:

   - O back-end estará disponível em http://localhost:3000.
   - O front-end estará disponível em http://localhost:3001.

3. Parar os contêineres:

   Para parar e remover os contêineres, execute:

   ```bash
   docker-compose down
   ```

### Arquivos Docker

- `Dockerfile` (Back-end): Configura o ambiente para o back-end usando Nest.js.
- `Dockerfile` (Front-end): Configura o ambiente para o front-end usando Next.js.
- `docker-compose.yml`: Configura os serviços necessários, incluindo o back-end, front-end e o MongoDB.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para o projeto, siga estes passos:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça as suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Envie a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Vídeo do projeto funcionando
   ![Grabación-2024-09-12-193025](https://github.com/user-attachments/assets/77a503cf-330f-4c0d-9a54-917356deaaef)


## Licença

Este projeto está licenciado sob a Licença MIT.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- LinkedIn(https://www.linkedin.com/in/yefferson-silva-gomez/)
- E-mail: yeffersonsilvagomez@gmail.com
