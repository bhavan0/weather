from pymongo import MongoClient


def get_database(data_base_name):

    # Uncomment below line incase using docker mongoDb
    # client = MongoClient('mongodb://mongodb:27017/')

    # Add mongodb connection string to below line
    CONNECTION_STRING = ""
    client = MongoClient(CONNECTION_STRING)

    return client[data_base_name]
