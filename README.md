![Tela principal do Catálogo Musical](https://github.com/EduardaLima-09/ProjetoIndividual/blob/main/CadastroMusica.png)
# Catálogo Musical

Projeto Integrador entre **Front-end e Programação Web** desenvolvido na **SPTECH**.

---

## Sobre o Projeto

O **Catálogo Musical** é uma aplicação web desenvolvida para facilitar o cadastro e o gerenciamento de álbuns musicais.

A aplicação permite cadastrar, visualizar, editar e remover álbuns, contendo informações como título, artista, gênero, ano e gravadora.

### Visualização do sistema

![Tela principal do Catálogo Musical](https://github.com/EduardaLima-09/ProjetoIndividual/blob/main/Captura%20de%20tela%202026-09-05%20193919.png)

---

## ✨ Funcionalidades

* ✅ Cadastrar álbuns
* ✅ Listar todos os álbuns
* ✅ Editar álbuns existentes
* ✅ Remover álbuns
* ✅ Buscar álbum por ID
* ✅ Informar título, artista, gênero, ano e gravadora

---

## Tema

**Música**

O projeto foi desenvolvido com o tema de catálogo musical, permitindo organizar informações sobre diferentes álbuns.

---
## Tecnologias

### Back-end

<p>
  <img src="https://img.shields.io/badge/Java-cc7f97?style=for-the-badge&logo=openjdk&logoColor=white">
  <img src="https://img.shields.io/badge/Spring%20Boot-cc7f97?style=for-the-badge&logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/Spring%20JDBC-cc7f97?style=for-the-badge&logo=spring&logoColor=white">
  <img src="https://img.shields.io/badge/H2%20Database-cc7f97?style=for-the-badge&logo=h2&logoColor=white">
  <img src="https://img.shields.io/badge/Maven-cc7f97?style=for-the-badge&logo=apachemaven&logoColor=white">
</p>

### Front-end

<p>
  <img src="https://img.shields.io/badge/React-cc7f97?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-cc7f97?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-cc7f97?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/CSS%20Modules-cc7f97?style=for-the-badge&logo=cssmodules&logoColor=white">
</p>


---

# 📁 Estrutura do Projeto

```text
projeto-musica/
│
├── api/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── school/sptech/cadastroMusica/
│   │   │   │       ├── Album.java
│   │   │   │       ├── AlbumController.java
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

# Como Executar

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

# Projeto

**Catálogo Musical**

Projeto desenvolvido por Maria Eduarda Lima
