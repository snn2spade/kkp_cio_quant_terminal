# CIO Quant Terminal - Backend API

FastAPI backend for the CIO Quant Terminal application.

## Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv .venv
   ```

3. Activate the virtual environment:
   ```bash
   .\.venv\Scripts\Activate.ps1
   ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Backend

### Development mode (with auto-reload):
```bash
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Project structures
- driven by features
   - see project overview from kkp_cio_quant_terminal\README.md

```txt
backend/
|-- app/
|   |-- core/              # shared app configuration
|   |-- features/          # feature-owned API routes
|   |   |-- analysts/
|   |   |-- data/
|   |   |-- market/
|   |   `-- user/
|   |-- shared/            # shared temporary data/utilities
|   `-- main.py            # FastAPI app factory
|-- main.py                # compatibility entrypoint for uvicorn main:app
|-- requirements.txt
`-- README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a mock user account and return a 7-day session
- `POST /api/auth/signin` - Sign in and return a 7-day session
- `GET /api/auth/me` - Get the current authenticated user from a bearer token
- `POST /api/auth/signout` - End the current mock session

### Market Data
- `GET /api/market-indices` - Get market indices data
- `GET /api/market-headlines` - Get market headlines

### Insights
- `GET /api/insights` - Get all insights
- `GET /api/insights/by-house/{house}` - Get insights by research house
- `GET /api/insights/by-analyst/{analyst}` - Get insights by analyst

### Reference Data
- `GET /api/analysts` - Get list of analysts
- `GET /api/houses` - Get list of research houses

### Time Series & Heatmap
- `GET /api/time-series` - Get time series data
- `GET /api/heatmap` - Get heatmap data

### Papers
- `GET /api/papers` - Get all papers
- `GET /api/papers/search?house=&analyst=&start_date=&end_date=` - Search papers with filters

## API Documentation

FastAPI automatically generates interactive API documentation:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## CORS Configuration

The backend is configured to accept requests from:
- http://localhost:5173 (Vite default)
- http://127.0.0.1:5173

## Data Source

Currently using mock data from `app/shared/mock_data.py`. In production, this will be replaced with feature-owned database queries or external API clients.

Authentication currently uses in-memory mock users and sessions in `app/features/user/service.py`. Session tokens expire after 7 days. This service boundary is intended to be replaced by MongoDB-backed user/session storage later.
