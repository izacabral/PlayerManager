PROJECT_NAME = playermanager

# Construir os contêineres da aplicação e do banco de dados
build:
	docker compose build

# Iniciar os contêineres
up:
	docker compose up -d

# Parar os contêineres
down:
	docker compose down

# Limpar volumes e imagens (remover dados do banco)
fclean:
	docker compose down -v --rmi all

# Limpar apenas volumes (preserva as imagens)
clean:
	docker compose down -v

# Ver logs
logs:
	docker compose logs -f

# Reiniciar os contêineres
restart:
	docker compose down && docker compose up -d

# Construir, iniciar e exibir logs
start: build up logs
