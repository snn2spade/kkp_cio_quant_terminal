@echo off
REM Start both frontend and backend

REM Start backend in a new window
echo Starting FastAPI backend...
start cmd /k "cd /d %~dp0backend && python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000"

REM Start frontend
echo Starting Vite frontend...
npm run dev
