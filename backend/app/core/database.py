from functools import lru_cache

from pymongo import MongoClient
from pymongo.database import Database

from app.core.config import get_mongodb_config


@lru_cache
def get_mongo_client() -> MongoClient:
    mongodb = get_mongodb_config()
    return MongoClient(mongodb["connection_string"], tz_aware=True)


def get_database() -> Database:
    mongodb = get_mongodb_config()
    return get_mongo_client()[mongodb["database"]]
