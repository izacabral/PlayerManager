<h1 align="center">PlayerManager API</h1>

<div align="center">This is the back-end API I developed for the Player Control Challenge, which implements a complete CRUD service for managing soccer players.</div>

<br />

<div align="center">
  <sub>Created by <a href="https://www.linkedin.com/in/izacabral/" target="_blank">Izabele Cabral</a>.</sub>
</div>

<br />

## 📚 About the Project

I developed this API as a solution for the Player Control Challenge, which required implementing a comprehensive CRUD service to manage soccer players. The goal was to create an API that allows creating, viewing, updating, and deleting player records, along with additional functionality for searching, filtering, and pagination. The project also includes strict validation for player attributes, ensuring all data meets defined constraints.

## 🖥️ Technologies Used

- **Node.js**: JavaScript runtime for back-end development.
- **Fastify**: A fast and efficient web framework for Node.js.
- **Prisma**: ORM for managing the database with type safety.
- **PostgreSQL**: Relational database for data storage.
- **Zod**: Schema declaration and validation library for validating API inputs.
- **Docker**: Containerization to streamline the development environment.
- **Swagger**: Documentation tool for RESTful APIs.


## 🚀 Quick Start

**Clone repository**

```bash
git clone https://github.com/izacabral/PlayerManager.git
```

```bash
cd PlayerManager
```

- In the root directory,create a `.env` file as following example:
```bash
DB_USER="player_manager_user"
DB_PASSWORD="dev12345"
DB_NAME="player_manager_db"
DB_PORT=5433
```

```bash
make start
```

The API will be responding on port 3030 at: <a href="http://localhost:3030" target="_blank">http://localhost:3030</a>

## 📜 API Endpoints

```JavaScript
GET /players -> List all players with optional pagination and search filters.
GET /players/:id -> Retrieve a specific player by ID.
POST /players -> Create a new player.
PUT /players/:id -> Update a player’s information.
DELETE /players/:id -> Delete a player.
```

## 📜 Documentation
I used Swagger to document the API endpoints. You can access the documentation locally once the server is running at: <a href="http://localhost:3030/docs" target="_blank">http://localhost:3030/docs</a>


## 🗂️ Directory Structure
```bash
/PlayerManager
├── prisma/
|  ├── migrations/
|  └── schema.prisma
├── src/
|  ├── controllers/
|  ├── docs/
|  ├── lib/
|  ├── routes/
|  ├── schemas/
|  ├── services/
|  └── server.ts
├── Dockerfile
├── Makefile
├── README.md
├── docker-compose.yaml
├── eslint.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json

```
## 🛠️ Additional Make Commands
You can use the following `make` commands to manage the Docker containers, images, and volumes for the application:

- Build the application and database containers:
  ```bash
  make build
  ```
- Start the containers:
  ```bash
  make up
  ```
- Stop the containers:
  ```bash
  make down
  ```
- Clean volumes and images (removes database data and all images):
  ```bash
  make fclean
  ```
- Clean only volumes (preserves images):
  ```bash
  make clean
  ```
- View logs:
  ```bash
  make logs
  ```
- Restart the containers:
  ```bash
  make restart
  ```

## 🔮 Future Improvements
- **Player Ranking**: Implement a ranking feature based on player skills.
- **Team Allocation**: Develop functionality to divide players into balanced teams.
- **Enhanced Error Messages**: Improve error handling to provide more informative and user-friendly error messages, including specific details on validation failures and database issues.



