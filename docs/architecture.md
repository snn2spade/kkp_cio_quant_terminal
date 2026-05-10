# Architecture design overview

System Communication path
- Frontend (React + Vite) ---> Backend (FastAPI) ---> App Database (MongoDB) / external services/databases

## Frontend (This project)
- Stacks
    - React
    - Vite
- Guideline
    - Web app interactive for user, no-crash even backend is failed or not ready
    - No hidden crash message, user-friendly and dev-friendly
    - data communicate via api backend

## Backend scope (This project)
- Stacks
    - FastAPI
- Guideline
    - authentication system
    - to query data from this app database
    - to query data from other services/ other databases

## App Database (This project)
- Stacks
    - MongoDB
- Guideline
    - To store user data

## List of other services/databases (Other projects)
- xxx