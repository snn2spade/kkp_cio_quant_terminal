from datetime import datetime, timedelta, timezone
import hashlib
import secrets
from typing import Any


SESSION_DAYS = 7
DEFAULT_ROLE = "Analyst"

_users: dict[str, dict[str, Any]] = {}
_sessions: dict[str, dict[str, Any]] = {}


def _hash_password(password: str, salt: str) -> str:
    return hashlib.sha256(f"{salt}:{password}".encode("utf-8")).hexdigest()


def _public_user(user: dict[str, Any]) -> dict[str, str]:
    return {
        "id": user["id"],
        "username": user["username"],
        "role": user["role"],
    }


def _find_username_key(username: str) -> str | None:
    normalized_username = username.strip().lower()
    for existing_username in _users:
        if existing_username.lower() == normalized_username:
            return existing_username
    return None


def _create_session(username: str) -> dict[str, Any]:
    token = secrets.token_urlsafe(32)
    expires_at = datetime.now(timezone.utc) + timedelta(days=SESSION_DAYS)
    _sessions[token] = {"username": username, "expires_at": expires_at}
    return {"token": token, "expires_at": expires_at.isoformat()}


def sign_up(username: str, password: str) -> dict[str, Any]:
    normalized_username = username.strip()
    if not normalized_username:
        raise ValueError("Username is required.")
    if len(password) < 6:
        raise ValueError("Password must be at least 6 characters.")
    if _find_username_key(normalized_username):
        raise ValueError("Username is already registered.")

    salt = secrets.token_hex(16)
    user = {
        "id": secrets.token_hex(8),
        "username": normalized_username,
        "role": DEFAULT_ROLE,
        "salt": salt,
        "password_hash": _hash_password(password, salt),
    }
    _users[normalized_username] = user
    session = _create_session(normalized_username)

    return {"user": _public_user(user), **session}


def sign_in(username: str, password: str) -> dict[str, Any]:
    username_key = _find_username_key(username)
    if not username_key:
        raise ValueError("Invalid username or password.")

    user = _users[username_key]
    password_hash = _hash_password(password, user["salt"])
    if not secrets.compare_digest(password_hash, user["password_hash"]):
        raise ValueError("Invalid username or password.")

    session = _create_session(user["username"])
    return {"user": _public_user(user), **session}


def get_user_by_token(token: str) -> dict[str, str] | None:
    session = _sessions.get(token)
    if not session:
        return None

    if session["expires_at"] <= datetime.now(timezone.utc):
        _sessions.pop(token, None)
        return None

    user = _users.get(session["username"])
    if not user:
        return None

    return _public_user(user)


def sign_out(token: str) -> None:
    _sessions.pop(token, None)
