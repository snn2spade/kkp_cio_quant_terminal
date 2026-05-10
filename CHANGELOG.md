# Changelog

All notable changes to this project will be documented in this file.

---

### v0.3.0-dev - Edit here/ To be released

- Added
    - Feature-driven backend package structure with market, analysts, and data routers.
    - MongoDB-backed user authentication with sign-up, sign-in, sign-out, current-user endpoint, guest mode, and 7-day sessions.
    - Frontend sign-in/sign-up pages, sidebar user profile state, and protected portfolio/workflow routes.
    - Root `config.json` and `config.example.json` for MongoDB connection and auth settings.
    - Dev and production Docker Compose stacks with frontend, backend, and MongoDB services.
    - Dockerfiles for FastAPI backend and React frontend, plus production Nginx API proxy.
- Changed
    - Moved backend mock data into `app/shared/mock_data.py` and kept `main.py` as the compatibility entrypoint.
    - Replaced in-memory auth users/sessions with MongoDB `users` and `sessions` collections.
    - Frontend API base URL now reads `VITE_API_BASE_URL` for Docker/dev environment support.
- Fixed
    - Disabled Vite browser auto-open inside Docker dev to avoid `xdg-open` container crashes.
    - Moved Docker MongoDB host ports away from `27017` to avoid colliding with local MongoDB.

### v0.2.0 - 2026-05-05
- Added
    - React + Vite frontend

### v0.1.0 - 2026-05-01

- Added
    - Initial project setup
    - Root project structure
    - README documentation
    - Basic frontend/backend integration
