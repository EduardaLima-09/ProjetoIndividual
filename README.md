![Tela principal do Catálogo Musical](https://github.com/EduardaLima-09/ProjetoIndividual/blob/main/CadastroMusica.png)

# Catálogo Musical

Projeto Integrador entre **Front-end e Programação Web** desenvolvido na **SPTECH**.

---

## Sobre o Projeto

O **Catálogo Musical** é uma aplicação web desenvolvida para facilitar o cadastro e o gerenciamento de álbuns musicais.

A aplicação permite que o usuário **cadastre, visualize, edite e remova álbuns**, contendo informações como:

* 🎵 Título
* 🎤 Artista
* 🎼 Gênero
* 📅 Ano
* 💿 Gravadora

O projeto foi desenvolvido integrando um **Front-end em React** com um **Back-end em Java e Spring Boot**, utilizando uma API REST para realizar a comunicação entre as duas partes.

### Visualização do sistema

![Tela principal do Catálogo Musical](https://github.com/EduardaLima-09/ProjetoIndividual/blob/main/Captura%20de%20tela%202026-09-05%20193919.png)

---

# ✨ Funcionalidades

* Cadastrar álbuns
* Listar todos os álbuns
* Editar álbuns existentes
* Remover álbuns
* Buscar álbum por ID
* Informar título, artista, gênero, ano e gravadora
* Comunicação entre Front-end e Back-end através de uma API REST

---

# Tema

### Música

O projeto foi desenvolvido com o tema de **catálogo musical**, permitindo organizar informações sobre diferentes álbuns em uma única aplicação.

A escolha do tema foi utilizada para colocar em prática conceitos de desenvolvimento **Front-end, Back-end, banco de dados e integração entre sistemas**.

---

# Tecnologias

## Back-end

<p>
  <img src="https://img.shields.io/badge/Java-cc7f97?style=for-the-badge&logo=openjdk&logoColor=white">
  <img src="https://img.shields.io/badge/Spring%20Boot-cc7f97?style=for-the-badge&logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/Spring%20JDBC-cc7f97?style=for-the-badge&logo=spring&logoColor=white">
  <img src="https://img.shields.io/badge/H2%20Database-cc7f97?style=for-the-badge&logo=h2&logoColor=white">
  <img src="https://img.shields.io/badge/Maven-cc7f97?style=for-the-badge&logo=apachemaven&logoColor=white">
</p>

### Java 21

Utilizado para desenvolver a parte do Back-end da aplicação.

### Spring Boot

Utilizado para criar a API REST e organizar o funcionamento do Back-end.

### Spring JDBC

Utilizado para realizar a comunicação entre a aplicação Java e o banco de dados.

### H2 Database

Banco de dados utilizado para armazenar as informações dos álbuns.

### Maven

Utilizado para gerenciar as dependências e executar o projeto Java.

---

## Front-end

<p>
  <img src="https://img.shields.io/badge/React-cc7f97?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-cc7f97?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-cc7f97?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/CSS%20Modules-cc7f97?style=for-the-badge&logo=cssmodules&logoColor=white">
</p>

### React

Utilizado para criar a interface da aplicação e os componentes das telas.

### Vite

Utilizado para criar e executar o projeto Front-end durante o desenvolvimento.

### Axios

Utilizado para realizar as requisições do Front-end para a API.

### CSS Modules

Utilizado para organizar os estilos dos componentes, evitando conflitos entre classes CSS.

---

# Estrutura do Projeto

O projeto está dividido em duas partes principais:

* **Front-end:** responsável pela interface e interação com o usuário.
* **Back-end:** responsável pela API, regras da aplicação e comunicação com o banco de dados.

```text
ProjetoIndividual/
│
├── back-end/
│   └── cadastroMusica/
│       └── cadastroMusica/
│           ├── src/
│           │   ├── main/
│           │   │   ├── java/
│           │   │   └── resources/
│           │   │
│           │   └── test/
│           │
│           ├── pom.xml
│           ├── mvnw
│           └── mvnw.cmd
│
├── cadastroMusica/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── componentes/
│   │   ├── servicos/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── index.html
│
├── CadastroMusica.png
├── Captura de tela...
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

> **Observação:** a estrutura acima representa a organização atual do projeto, diferente da estrutura `api/` e `cliente/` que aparecia no README anterior.

---

# Como o sistema funciona?

O funcionamento do projeto acontece através da comunicação entre o **Front-end**, a **API** e o **banco de dados**.

```text
┌─────────────────┐
│     USUÁRIO     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    FRONT-END    │
│      React      │
└────────┬────────┘
         │
         │ Requisição HTTP
         ▼
┌─────────────────┐
│     BACK-END    │
│  Spring Boot    │
│      API REST   │
└────────┬────────┘
         │
         │ JDBC
         ▼
┌─────────────────┐
│ BANCO DE DADOS  │
│       H2        │
└─────────────────┘
```

Por exemplo, quando o usuário cadastra um álbum:

1. O usuário preenche o formulário.
2. O React coleta as informações.
3. O Axios envia os dados para a API.
4. O Spring Boot recebe a requisição.
5. O Back-end realiza a operação no banco de dados.
6. O banco armazena as informações.
7. A API retorna uma resposta.
8. O Front-end atualiza a tela.

---

# 🔗 Endpoints da API

A API utiliza os métodos HTTP para realizar as operações de CRUD.

| Método   | Endpoint       | Função                 |
| -------- | -------------- | ---------------------- |
| `GET`    | `/albuns`      | Lista todos os álbuns  |
| `GET`    | `/albuns/{id}` | Busca um álbum pelo ID |
| `POST`   | `/albuns`      | Cadastra um novo álbum |
| `PUT`    | `/albuns/{id}` | Atualiza um álbum      |
| `DELETE` | `/albuns/{id}` | Remove um álbum        |

### CRUD

O projeto utiliza as quatro operações principais:

**Create → POST**
Cadastra um novo álbum.

**Read → GET**
Consulta os álbuns cadastrados.

**Update → PUT**
Atualiza um álbum existente.

**Delete → DELETE**
Remove um álbum.

---

# Banco de Dados

O projeto utiliza o **H2 Database** para armazenar os dados.

As informações dos álbuns são organizadas de acordo com os campos utilizados pela aplicação:

| Campo     | Informação             |
| --------- | ---------------------- |
| ID        | Identificação do álbum |
| Título    | Nome do álbum          |
| Artista   | Artista ou banda       |
| Gênero    | Gênero musical         |
| Ano       | Ano de lançamento      |
| Gravadora | Gravadora responsável  |

---

# Como Executar

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Java 21 ou superior
* Node.js
* npm

---

## 1. Clonar o repositório

```bash
git clone https://github.com/EduardaLima-09/ProjetoIndividual.git
```

Depois, entre na pasta:

```bash
cd ProjetoIndividual
```

---

## 2. Executar o Back-end

Entre na pasta do Back-end:

```bash
cd back-end/cadastroMusica/cadastroMusica
```

No Windows, execute:

```bash
mvnw.cmd spring-boot:run
```

O Back-end será iniciado na porta:

```text
http://localhost:8080
```

---

## 3. Executar o Front-end

Abra **outro terminal** e entre na pasta do Front-end:

```bash
cd cadastroMusica
```

Instale as dependências:

```bash
npm install
```

Depois execute:

```bash
npm run dev
```

O Vite irá disponibilizar o endereço da aplicação no próprio terminal.

---

# Comunicação entre as partes

O Front-end e o Back-end trabalham juntos, mas possuem responsabilidades diferentes.

### Front-end

Responsável por:

* Mostrar as telas
* Receber informações do usuário
* Enviar requisições
* Mostrar os resultados

### Back-end

Responsável por:

* Receber as requisições
* Processar as informações
* Realizar as operações do CRUD
* Acessar o banco de dados
* Retornar respostas para o Front-end

### Banco de dados

Responsável por:

* Armazenar os álbuns
* Consultar informações
* Alterar registros
* Excluir registros

---

# Objetivos de aprendizagem

Com o desenvolvimento deste projeto, foram trabalhados conceitos de:

* Desenvolvimento de aplicações React
* Componentização
* CSS Modules
* Consumo de APIs
* Requisições HTTP
* CRUD
* API REST
* Java
* Spring Boot
* Spring JDBC
* JdbcTemplate
* Banco de dados H2
* Integração entre Front-end e Back-end

---

# Autora

**Maria Eduarda Lima**

Projeto desenvolvido para fins acadêmicos na **SPTECH**.

---

# Licença

Este projeto está disponível sob a licença **Apache-2.0**.
