#!/bin/bash
# Start both frontend and backend

# Start backend in background
echo "Starting FastAPI backend..."
cd "$(dirname "$0")/backend" || exit
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Go back to root
cd ..

# Start frontend
echo "Starting Vite frontend..."
npm run dev

# When frontend is stopped, also stop backend
trap "kill $BACKEND_PID" EXIT
