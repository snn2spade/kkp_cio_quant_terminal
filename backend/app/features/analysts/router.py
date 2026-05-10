from fastapi import APIRouter

from app.shared.mock_data import analysts, houses, insights, papers


router = APIRouter(prefix="/api", tags=["analysts"])


@router.get("/insights")
async def get_insights():
    return insights


@router.get("/insights/by-house/{house}")
async def get_insights_by_house(house: str):
    return [insight for insight in insights if insight["house"] == house]


@router.get("/insights/by-analyst/{analyst}")
async def get_insights_by_analyst(analyst: str):
    return [insight for insight in insights if insight["analyst"] == analyst]


@router.get("/analysts")
async def get_analysts():
    return analysts


@router.get("/houses")
async def get_houses():
    return houses


@router.get("/papers")
async def get_papers():
    return papers


@router.get("/papers/search")
async def search_papers(
    house: str | None = None,
    analyst: str | None = None,
    start_date: str | None = None,
    end_date: str | None = None,
):
    results = papers.copy()

    if house:
        results = [paper for paper in results if paper["house"] == house]
    if analyst:
        results = [paper for paper in results if analyst in paper["authors"]]
    if start_date:
        results = [paper for paper in results if paper["date"] >= start_date]
    if end_date:
        results = [paper for paper in results if paper["date"] <= end_date]

    return results
