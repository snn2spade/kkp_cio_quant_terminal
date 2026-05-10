from fastapi import APIRouter

from app.shared.mock_data import heatmap_data, time_series_data


router = APIRouter(prefix="/api", tags=["data"])


@router.get("/time-series")
async def get_time_series():
    return time_series_data


@router.get("/heatmap")
async def get_heatmap():
    return heatmap_data
