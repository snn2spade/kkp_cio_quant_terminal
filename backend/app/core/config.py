from functools import lru_cache
import json
from pathlib import Path
from typing import Any


PROJECT_ROOT = Path(__file__).resolve().parents[3]
CONFIG_PATH = PROJECT_ROOT / "config.json"


class AppConfigError(RuntimeError):
    pass


@lru_cache
def get_config() -> dict[str, Any]:
    if not CONFIG_PATH.exists():
        raise AppConfigError(
            f"Missing config file at {CONFIG_PATH}. Copy config.example.json to config.json and update it."
        )

    try:
        config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise AppConfigError(f"Invalid JSON in {CONFIG_PATH}: {error}") from error

    mongodb = config.get("mongodb") or {}
    if not mongodb.get("connection_string"):
        raise AppConfigError("Missing mongodb.connection_string in config.json.")
    if not mongodb.get("database"):
        raise AppConfigError("Missing mongodb.database in config.json.")

    return config


def get_mongodb_config() -> dict[str, str]:
    return get_config()["mongodb"]


def get_auth_config() -> dict[str, Any]:
    return get_config().get("auth") or {}
