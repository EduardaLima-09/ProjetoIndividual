# Catálogo Musical

Projeto Integrador entre Front-end e Programação Web desenvolvido na SPTECH

## Sobre o Projeto

O **Catálogo Musical** é uma aplicação web que permite cadastrar, listar, editar e remover álbuns musicais. Desenvolvido com Java Spring Boot no back-end e React no front-end.

### Funcionalidades

- ✅ Cadastrar álbuns (título, artista, gênero, ano, gravadora)
- ✅ Listar todos os álbuns
- ✅ Editar álbuns existentes
- ✅ Remover álbuns
- ✅ Buscar álbum por ID

### Tema

Música 🎵

---

## Tecnologias

### Back-end
- Java 21
- Spring Boot 3.2.0
- Spring JDBC / JdbcTemplate
- H2 Database
- Maven

### Front-end
- React 18.2.0
- Vite
- Axios
- CSS Modules

---

## Estrutura do Projeto
projeto-musica/
├── api/ # Back-end Spring Boot
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/
│ │ │ │ └── school/sptech/cadastroMusica/
│ │ │ │ ├── Album.java
│ │ │ │ ├── AlbumControle.java
│ │ │ │ └── CadastroMusicaApplication.java
│ │ │ └── resources/
│ │ │ ├── application.properties
│ │ │ └── schema.sql
│ │ └── test/
│ ├── pom.xml
│ └── README.md
│
├── cliente/ # Front-end React
│ ├── src/
│ │ ├── main.jsx
│ │ ├── App.jsx
│ │ ├── App.module.css
│ │ └── servicos/
│ │ └── api.js
│ ├── package.json
│ ├── vite.config.js
│ ├── index.html
│ └── README.md
│
└── README.md


---

## Como Executar

### Pré-requisitos

- Java 21+
- Node.js 18+
- npm

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/projeto-musica.git
cd projeto-musica

cd api
./mvnw spring-boot:run

cd cliente
npm install
npm run dev

