from database_connection import get_database
import re


def getAllCities(skipNo, limitNo, searchText):
    dbName = get_database('weather')
    collectionName = dbName["cities"]

    if len(searchText) > 0:
        allCities = collectionName.find(
            {"name": re.compile(searchText, re.IGNORECASE)}, {'id': 1, 'name': 1, '_id': 0}).skip(skipNo).limit(limitNo)
    else:
        allCities = collectionName.find(
            {}, {'id': 1, 'name': 1, '_id': 0}).skip(skipNo).limit(limitNo)

    return list(allCities)
