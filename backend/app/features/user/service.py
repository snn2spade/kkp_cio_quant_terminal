from datetime import datetime, timedelta, timezone
import hashlib
import secrets
from typing import Any

from pymongo import ASCENDING
from pymongo.errors import DuplicateKeyError, PyMongoError

from app.core.config import get_auth_config
from app.core.database import get_database


class AuthStorageError(RuntimeError):
    pass


_indexes_ready = False


def _auth_config() -> dict[str, Any]:
    config = get_auth_config()
    return {
        "session_days": int(config.get("session_days", 7)),
        "default_role": config.get("default_role", "Analyst"),
    }


def _users_collection():
    return get_database()["users"]


def _sessions_collection():
    return get_database()["sessions"]


def _ensure_indexes() -> None:
    global _indexes_ready
    if _indexes_ready:
        return

    try:
        _users_collection().create_index([("username_lower", ASCENDING)], unique=True)
        _sessions_collection().create_index([("token", ASCENDING)], unique=True)
        _sessions_collection().create_index([("expires_at", ASCENDING)], expireAfterSeconds=0)
    except PyMongoError as error:
        raise AuthStorageError("Unable to connect to MongoDB auth storage.") from error

    _indexes_ready = True


def _hash_password(password: str, salt: str) -> str:
    return hashlib.sha256(f"{salt}:{password}".encode("utf-8")).hexdigest()


def _public_user(user: dict[str, Any]) -> dict[str, str]:
    return {
        "id": user["id"],
        "username": user["username"],
        "role": user["role"],
    }


def _create_session(user_id: str) -> dict[str, Any]:
    token = secrets.token_urlsafe(32)
    expires_at = datetime.now(timezone.utc) + timedelta(days=_auth_config()["session_days"])

    try:
        _sessions_collection().insert_one(
            {
                "token": token,
                "user_id": user_id,
                "expires_at": expires_at,
                "created_at": datetime.now(timezone.utc),
            }
        )
    except PyMongoError as error:
        raise AuthStorageError("Unable to create auth session.") from error

    return {"token": token, "expires_at": expires_at.isoformat()}


def sign_up(username: str, password: str) -> dict[str, Any]:
    _ensure_indexes()

    normalized_username = username.strip()
    if not normalized_username:
        raise ValueError("Username is required.")
    if len(password) < 6:
        raise ValueError("Password must be at least 6 characters.")

    salt = secrets.token_hex(16)
    user = {
        "id": secrets.token_hex(8),
        "username": normalized_username,
        "username_lower": normalized_username.lower(),
        "role": _auth_config()["default_role"],
        "salt": salt,
        "password_hash": _hash_password(password, salt),
        "created_at": datetime.now(timezone.utc),
    }

    try:
        _users_collection().insert_one(user)
    except DuplicateKeyError as error:
        raise ValueError("Username is already registered.") from error
    except PyMongoError as error:
        raise AuthStorageError("Unable to create user account.") from error

    session = _create_session(user["id"])

    return {"user": _public_user(user), **session}


def sign_in(username: str, password: str) -> dict[str, Any]:
    _ensure_indexes()

    try:
        user = _users_collection().find_one({"username_lower": username.strip().lower()})
    except PyMongoError as error:
        raise AuthStorageError("Unable to read user account.") from error

    if not user:
        raise ValueError("Invalid username or password.")

    password_hash = _hash_password(password, user["salt"])
    if not secrets.compare_digest(password_hash, user["password_hash"]):
        raise ValueError("Invalid username or password.")

    session = _create_session(user["id"])
    return {"user": _public_user(user), **session}


def get_user_by_token(token: str) -> dict[str, str] | None:
    _ensure_indexes()

    try:
        session = _sessions_collection().find_one({"token": token})
    except PyMongoError as error:
        raise AuthStorageError("Unable to read auth session.") from error

    if not session:
        return None

    if session["expires_at"] <= datetime.now(timezone.utc):
        _sessions_collection().delete_one({"token": token})
        return None

    try:
        user = _users_collection().find_one({"id": session["user_id"]})
    except PyMongoError as error:
        raise AuthStorageError("Unable to read user account.") from error

    if not user:
        return None

    return _public_user(user)


def sign_out(token: str) -> None:
    _ensure_indexes()

    try:
        _sessions_collection().delete_one({"token": token})
    except PyMongoError as error:
        raise AuthStorageError("Unable to end auth session.") from error
