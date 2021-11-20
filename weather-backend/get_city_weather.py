import requests


def getWeatherOfCity(cityId, APIkey):

    try:
        response = requests.get(
            f'http://api.openweathermap.org/data/2.5/weather?id={cityId}&appid={APIkey}')

        res = response.json()

        weather = {
            'temp': res['main']['temp'],
            'feelsLike': res['main']['feels_like'],
            'min': res['main']['temp_min'],
            'max': res['main']['temp_max'],
            'pressure': res['main']['pressure'],
            'humidity': res['main']['humidity'],
            'description': res['weather'][0]['description'],
            'main': res['weather'][0]['main']
        }

        return weather
    except:
        print('data not available')
