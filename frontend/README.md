# CIO Quant Terminal - Frontend

React + Vite frontend for CIO Quant Terminal.

## Stack

- React 18
- Vite
- React Router
- Tailwind CSS
- Base UI / local UI components
- Lucide icons
- Recharts

## Setup

```bash
cd frontend
npm install
```

## Run Locally

```bash
npm run dev
```

Default URL:

```txt
http://localhost:3000
```

The frontend expects the backend API at:

```txt
http://localhost:8000/api
```

Override with:

```bash
VITE_API_BASE_URL=http://localhost:8000/api npm run dev
```

On Windows PowerShell:

```powershell
$env:VITE_API_BASE_URL="http://localhost:8000/api"
npm run dev
```

## Build

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Docker

Use the root compose files:

```bash
docker compose -f infra/compose/docker-compose.dev.yml up --build
docker compose -f infra/compose/docker-compose.prod.yml up --build -d
```

Dev frontend:

```txt
http://localhost:3000
```

Prod frontend:

```txt
http://localhost:8080
```

In production Docker, Nginx serves the built frontend and proxies `/api` to the backend container.

## Environment Variables

| Name | Default | Purpose |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `http://localhost:8000/api` | Backend API base URL |
| `VITE_OPEN_BROWSER` | `false` unless explicitly set to `true` | Controls Vite browser auto-open |

`VITE_OPEN_BROWSER` should stay `false` in Docker because containers do not have a desktop browser opener.

## App Routes

| Route | Page | Access |
| --- | --- | --- |
| `/` | Dashboard / Home | Guest allowed |
| `/analysts` | Analysts | Guest allowed |
| `/market` | Market | Guest allowed |
| `/data` | Data | Guest allowed |
| `/signal` | Signal | Guest allowed |
| `/portfolio` | Portfolio | Auth required |
| `/workflow` | Workflow | Auth required |
| `/signin` | Sign in | Public |
| `/signup` | Sign up | Public |

## Authentication Behavior

- Guest mode is allowed by default.
- Sidebar profile shows `Guest / Guest` until signed in.
- Sign-up creates a user with default role `Analyst`.
- Session tokens are stored in `localStorage`.
- Expired or invalid sessions are cleared on app load.
- Protected routes show a sign-in/sign-up prompt instead of crashing.

## Source Structure

```txt
src/
|-- auth/          # auth context and protected route
|-- components/
|   |-- layout/    # app shell and sidebar
|   |-- modules/   # feature modules
|   `-- ui/        # reusable UI primitives
|-- data/          # temporary frontend mock data
|-- lib/           # API client and utilities
|-- pages/         # route pages
|-- App.jsx
|-- main.jsx
`-- index.css
```

## API Access Pattern

All backend calls should go through:

```txt
src/lib/api.js
```

Do not call external services directly from React pages/components. The frontend should communicate through the FastAPI backend.
