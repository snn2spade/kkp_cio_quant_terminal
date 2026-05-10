from fastapi import FastAPI

from app.core.cors import configure_cors
from app.features.analysts.router import router as analysts_router
from app.features.data.router import router as data_router
from app.features.market.router import router as market_router
from app.features.user.router import router as user_router


def create_app() -> FastAPI:
    app = FastAPI(title="CIO Quant Terminal API")
    configure_cors(app)

    @app.get("/")
    async def root():
        return {"message": "CIO Quant Terminal API is running"}

    app.include_router(market_router)
    app.include_router(analysts_router)
    app.include_router(data_router)
    app.include_router(user_router)

    return app


app = create_app()
