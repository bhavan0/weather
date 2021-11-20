import json
from database_connection import get_database


def insertCities():
    with open("city.list.json") as file:
        file_data = json.load(file)

        dbname = get_database('weather')
        collection_name = dbname["cities"]
        if collection_name.find().count() > 0:
            return
        collection_name.insert_many(file_data)
