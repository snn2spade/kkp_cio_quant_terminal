## Docker Compose

This project has two Compose files with the same three main services:

- `frontend` - React app
- `backend` - FastAPI API
- `db` - MongoDB

### Config Files

The backend code always reads:

```txt
/app/config.json
```

Which root config file is used depends on how the app runs:

| Runtime | Source config | Mounted/read as |
| --- | --- | --- |
| Local backend without Docker | `config.json` | `<project-root>/config.json` |
| Docker dev compose | `config.dev.json` | `/app/config.json` |
| Docker prod compose | `config.prod.json` | `/app/config.json` |

Use `mongodb://localhost:27017` for local backend on your machine.
Use `mongodb://db:27017` inside Docker Compose because `db` is the MongoDB service name.

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
