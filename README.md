# Linkr - Backend

## Descrição

A API do projeto Linkr é a espinha dorsal de uma emocionante plataforma de rede social para compartilhamento de links e interações sociais. Este poderoso servidor foi construído com tecnologias de ponta, como Node.js, Express, e Postgres, e oferece uma série de recursos e funcionalidades para fornecer uma experiência de usuário excepcional.

![Linkr Demo](https://github.com/kadioba/projeto19-linkr-front/blob/main/demo-images/Desktop%20-%2018.png)

🚀 **[Linkr Live Demo](https://projeto19-linkr-front-77u8lzs42-kadioba.vercel.app/)**

🪪 Você pode usar as seguitnes credenciais de teste **email**: "teste@teste.com" e **senha**: "teste"

⚠️ A demonsntração pode apresentar instabilidades devido ao uso de servidores gratuitos

Link de demosntração da API: https://linkrapi-wcod.onrender.com

Repositório front-end: [https://github.com/kadioba/projeto19-linkr-front](https://github.com/kadioba/projeto19-linkr-front)

## Sobre

O Linkr é mais do que apenas uma rede social; é um espaço digital onde os usuários podem compartilhar links interessantes com o mundo e interagir com outros entusiastas da web. Algumas de suas principais características incluem:

- **Publicação de Links:** Os usuários podem compartilhar links para artigos, vídeos, imagens e muito mais.

- **Hashtags em Destaque:** As hashtags são destacadas em cada post, permitindo que os usuários explorem tópicos específicos rapidamente.

- **Feed Personalizado:** A timeline de cada usuário apresenta posts de outros usuários que eles seguem.

- **Comentários e Repostagens:** Os usuários podem comentar em posts e até mesmo repostá-los em sua própria timeline.

- **Seguindo e Seguidores:** Os usuários podem seguir outros usuários e ver quem os segue.

- **Pesquisa de Usuários:** Uma funcionalidade de busca permite aos usuários encontrar facilmente outros usuários.

- **Autenticação Segura:** A autenticação é feita de forma segura, garantindo a proteção das informações dos usuários.

Este projeto foi desenvolvido com paixão e dedicação para criar uma experiência única de compartilhamento de links e interação social na web.

### Tecnologias

- Node.js
- Express.js
- Postgres
- Joi (para validação de dados)
- Outras bibliotecas e ferramentas essenciais

### Endpoints da API

A API oferece os seguintes endpoints:

#### Autenticação

- `POST /api/auth/signup`: Rota para o registro de novos usuários.
- `POST /api/auth/signin`: Rota para o login de usuários existentes.
- `POST /api/auth/signout`: Rota para o logout de usuários autenticados.

#### Posts

- `POST /api/posts`: Rota para criar um novo post.
- `GET /api/posts`: Rota para listar todos os posts.
- `GET /api/posts/:postId`: Rota para obter detalhes de um post específico.
- `PUT /api/posts/:postId`: Rota para editar um post existente.
- `DELETE /api/posts/:postId`: Rota para excluir um post.

#### Comentários

- `POST /api/posts/:postId/comments`: Rota para adicionar um comentário a um post.
- `GET /api/posts/:postId/comments`: Rota para listar todos os comentários de um post.

#### Hashtags

- `GET /api/hashtags`: Rota para obter as hashtags em destaque.
- `GET /api/hashtags/:hashtag/posts`: Rota para listar os posts relacionados a uma hashtag específica.

#### Seguindo e Seguidores

- `POST /api/users/:userId/follow`: Rota para seguir um usuário.
- `GET /api/users/:userId/followers`: Rota para listar os seguidores de um usuário.
- `GET /api/users/:userId/following`: Rota para listar os usuários seguidos por um usuário.

#### Pesquisa de Usuários

- `GET /api/users/search`: Rota para pesquisar por outros usuários com base em critérios específicos.

Estes endpoints permitem aos usuários do Linkr interagir com a plataforma de várias maneiras, desde a criação de posts até a exploração de hashtags populares e a interação com outros usuários. A API foi projetada para ser segura e eficiente, garantindo uma experiência de usuário incrível.

## Como Executar

Siga as etapas abaixo para configurar e executar o backend do Linkr em sua máquina local:

1. Clone o repositório do backend em sua máquina:

```bash
git clone https://github.com/seu-usuario/projeto-linkr-backend
cd projeto-linkr-backend
```

2. Crie um arquivo `.env` no diretório raiz do projeto e configure as seguintes variáveis de ambiente:

```dotenv
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=linkr
DATABASE_URL=postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
```

3. Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

4. Execute o comando para criar as entidades no banco de dados:

```bash
npm run migrei:up
```

5. Inicie o servidor do backend:

```bash
npm start
```

Agora, o backend estará em execução em `http://localhost:5000`, pronto para atender às solicitações da aplicação frontend.

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

Sinta-se à vontade para explorar e integrar o backend com a aplicação frontend Linkr! Se você encontrar algum problema ou tiver sugestões de melhoria, não hesite em relatar ou contribuir para o projeto.

Aproveite o uso do Linkr! 🌐

