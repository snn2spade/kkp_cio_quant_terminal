from fastapi import APIRouter, Header, HTTPException, status
from pydantic import BaseModel

from app.features.user import service


router = APIRouter(prefix="/api/auth", tags=["user"])


class AuthRequest(BaseModel):
    username: str
    password: str


def _extract_token(authorization: str | None) -> str:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication token is required.",
        )
    return authorization.removeprefix("Bearer ").strip()


@router.post("/signup")
async def sign_up(payload: AuthRequest):
    try:
        return service.sign_up(payload.username, payload.password)
    except ValueError as error:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(error)) from error


@router.post("/signin")
async def sign_in(payload: AuthRequest):
    try:
        return service.sign_in(payload.username, payload.password)
    except ValueError as error:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(error)) from error


@router.get("/me")
async def get_current_user(authorization: str | None = Header(default=None)):
    token = _extract_token(authorization)
    user = service.get_user_by_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session expired or invalid.",
        )
    return {"user": user}


@router.post("/signout")
async def sign_out(authorization: str | None = Header(default=None)):
    token = _extract_token(authorization)
    service.sign_out(token)
    return {"message": "Signed out."}
