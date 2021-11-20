import json
from get_city_weather import getWeatherOfCity
from get_cities import getAllCities
from insert_cities import insertCities
from flask_caching import Cache
from flask_cors import CORS
from flask_restful import Resource, Api, request, reqparse
from flask import Flask


config = {
    "DEBUG": True,
    "CACHE_TYPE": "SimpleCache",
    "CACHE_DEFAULT_TIMEOUT": 1000000
}

app = Flask(__name__)
app.config.from_mapping(config)
app.config['SECRET_KEY'] = 'secret!'
cache = Cache(app)
api = Api(app)
CORS(app, allow_headers=['Content-Type', 'Access-Control-Allow-Origin',
                         'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods'])


class Weather(Resource):

    @app.route('/get-cities', methods=['GET'])
    def getCitites():
        parser = reqparse.RequestParser()
        parser.add_argument('pageNo', required=True)
        parser.add_argument('pageCount', required=True)
        parser.add_argument('searchText', required=True)
        args = parser.parse_args()

        pageNo = int(args['pageNo'])
        pageCount = int(args['pageCount'])
        searchText = (args['searchText'])

        cities = getAllCities((pageNo - 1) *
                              pageCount, pageCount, searchText)

        return {'cities': json.loads(json.dumps(cities))}, 200

    @app.route('/get-city-weather', methods=['GET'])
    def getCityWeatherById():
        parser = reqparse.RequestParser()
        parser.add_argument('cityId', required=True)
        args = parser.parse_args()

        cityId = int(args['cityId'])

        weather = getWeatherOfCity(cityId, "903deae0a4bb3aa7a18033058216c04f")

        return {'weather': weather}, 200


api.add_resource(Weather, '/')


if __name__ == "__main__":
    insertCities()
    app.run(host='0.0.0.0', port=6005)
