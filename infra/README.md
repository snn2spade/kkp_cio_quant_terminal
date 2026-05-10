## Docker Compose

This project has two Compose files with the same three main services:

- `frontend` - React app
- `backend` - FastAPI API
- `db` - MongoDB

### Development

```bash
docker compose -f infra/compose/docker-compose.dev.yml up --build
```

Development URLs:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- MongoDB from host: mongodb://localhost:27018
- MongoDB from containers: mongodb://db:27017

The dev backend container mounts root `config.dev.json` as `/app/config.json`.
For Docker Compose, MongoDB should use the service hostname:

```json
"connection_string": "mongodb://db:27017"
```

### Production

```bash
docker compose -f infra/compose/docker-compose.prod.yml up --build -d
```

Production URLs:
- Frontend: http://localhost:8080
- Backend: http://localhost:8000
- MongoDB from host: mongodb://localhost:27019
- MongoDB from containers: mongodb://db:27017

The prod backend container mounts root `config.prod.json` as `/app/config.json`.
The frontend Nginx container proxies `/api` to the backend container.
