# 🎵 Catálogo Musical

Projeto Integrador entre **Front-end e Programação Web** desenvolvido na **SPTECH**.

---

## 📸 Sobre o Projeto

O **Catálogo Musical** é uma aplicação web desenvolvida para facilitar o cadastro e o gerenciamento de álbuns musicais.

A aplicação permite cadastrar, visualizar, editar e remover álbuns, contendo informações como título, artista, gênero, ano e gravadora.

### 🖥️ Visualização do sistema

![Tela principal do Catálogo Musical](./imagens/catalogo.png)

---

## ✨ Funcionalidades

* ✅ Cadastrar álbuns
* ✅ Listar todos os álbuns
* ✅ Editar álbuns existentes
* ✅ Remover álbuns
* ✅ Buscar álbum por ID
* ✅ Informar título, artista, gênero, ano e gravadora

---

## 🎶 Tema

**Música 🎵**

O projeto foi desenvolvido com o tema de catálogo musical, permitindo organizar informações sobre diferentes álbuns.

---

## 📸 Telas do Sistema

### 🏠 Tela principal

Nesta tela são apresentados os álbuns cadastrados no sistema.

![Tela principal](./imagens/catalogo.png)

### 📝 Cadastro de álbum

Tela utilizada para cadastrar um novo álbum no catálogo.

![Cadastro de álbum](./imagens/cadastro.png)

### ✏️ Edição de álbum

Tela utilizada para alterar as informações de um álbum já cadastrado.

![Edição de álbum](./imagens/edicao.png)

---

# 🛠️ Tecnologias

## Back-end

* ☕ Java 21
* 🌱 Spring Boot 3.2.0
* 🗄️ Spring JDBC / JdbcTemplate
* 💾 H2 Database
* 📦 Maven

## Front-end

* ⚛️ React 18.2.0
* ⚡ Vite
* 🔗 Axios
* 🎨 CSS Modules

---

# 📁 Estrutura do Projeto

```text
projeto-musica/
│
├── imagens/
│   ├── catalogo.png
│   ├── cadastro.png
│   └── edicao.png
│
├── api/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── school/sptech/cadastroMusica/
│   │   │   │       ├── Album.java
│   │   │   │       ├── AlbumControle.java
│   │   │   │       └── CadastroMusicaApplication.java
│   │   │   │
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── schema.sql
│   │   │
│   │   └── test/
│   │
│   ├── pom.xml
│   └── README.md
│
├── cliente/
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── App.module.css
│   │   └── servicos/
│   │       └── api.js
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── README.md
│
└── README.md
```

---

# 🚀 Como Executar

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Java 21+
* Node.js 18+
* npm

---

## 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/projeto-musica.git
```

Depois:

```bash
cd projeto-musica
```

---

## 2. Executar o Back-end

Entre na pasta da API:

```bash
cd api
```

Execute o projeto:

```bash
./mvnw spring-boot:run
```

No Windows, caso necessário:

```bash
mvnw.cmd spring-boot:run
```

O back-end será executado na porta:

```text
http://localhost:8080
```

---

## 3. Executar o Front-end

Abra outro terminal e entre na pasta do cliente:

```bash
cd cliente
```

Instale as dependências:

```bash
npm install
```

Depois execute:

```bash
npm run dev
```

O front-end será disponibilizado pelo Vite.

---

# 🔗 Endpoints da API

| Método | Endpoint       | Função                 |
| ------ | -------------- | ---------------------- |
| GET    | `/albuns`      | Lista todos os álbuns  |
| GET    | `/albuns/{id}` | Busca um álbum pelo ID |
| POST   | `/albuns`      | Cadastra um álbum      |
| PUT    | `/albuns/{id}` | Atualiza um álbum      |
| DELETE | `/albuns/{id}` | Remove um álbum        |

---

# 👩‍💻 Projeto

**Catálogo Musical**

Projeto desenvolvido para o **Projeto Integrador entre Front-end e Programação Web — SPTECH**.

🎵 Desenvolvido com React + Java Spring Boot.
