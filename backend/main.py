from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import (
    market_indices,
    market_headlines,
    insights,
    analysts,
    houses,
    time_series_data,
    heatmap_data,
    papers
)

app = FastAPI(title="CIO Quant Terminal API")

# Configure CORS to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "http://127.0.0.1:3000", "http://127.0.0.1:3001", "http://ptsecwpcgc5010:3000",
                   "http://localhost:5173", "http://127.0.0.1:5173"],  # Common dev ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "CIO Quant Terminal API is running"}

# Market Indices endpoints
@app.get("/api/market-indices")
async def get_market_indices():
    return market_indices

# Market Headlines endpoints
@app.get("/api/market-headlines")
async def get_market_headlines():
    return market_headlines

# Insights endpoints
@app.get("/api/insights")
async def get_insights():
    return insights

@app.get("/api/insights/by-house/{house}")
async def get_insights_by_house(house: str):
    return [insight for insight in insights if insight["house"] == house]

@app.get("/api/insights/by-analyst/{analyst}")
async def get_insights_by_analyst(analyst: str):
    return [insight for insight in insights if insight["analyst"] == analyst]

# Reference data endpoints
@app.get("/api/analysts")
async def get_analysts():
    return analysts

@app.get("/api/houses")
async def get_houses():
    return houses

# Time Series endpoints
@app.get("/api/time-series")
async def get_time_series():
    return time_series_data

# Heatmap endpoints
@app.get("/api/heatmap")
async def get_heatmap():
    return heatmap_data

# Papers endpoints
@app.get("/api/papers")
async def get_papers():
    return papers

@app.get("/api/papers/search")
async def search_papers(house: str = None, analyst: str = None, start_date: str = None, end_date: str = None):
    results = papers.copy()
    
    if house:
        results = [p for p in results if p["house"] == house]
    if analyst:
        results = [p for p in results if analyst in p["authors"]]
    if start_date:
        results = [p for p in results if p["date"] >= start_date]
    if end_date:
        results = [p for p in results if p["date"] <= end_date]
    
    return results
