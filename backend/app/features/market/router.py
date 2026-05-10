from fastapi import APIRouter

from app.shared.mock_data import market_headlines, market_indices


router = APIRouter(prefix="/api", tags=["market"])


@router.get("/market-indices")
async def get_market_indices():
    return market_indices


@router.get("/market-headlines")
async def get_market_headlines():
    return market_headlines
