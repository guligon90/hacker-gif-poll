# Base imports
from os import environ

# Project imports
from libs.http.methods import get


BASE_URL = environ.get('TENOR_API_BASE_URL')


def get_hacker_gifs(params):
    url = f'{BASE_URL}/search'
    return get(url, params)
