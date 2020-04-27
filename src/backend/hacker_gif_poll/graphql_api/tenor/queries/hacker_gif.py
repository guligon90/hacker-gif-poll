
# Base imports
from os import environ

# Third party imports
from graphene import Field, ObjectType, String, Int

# Project imports
from graphql_api.tenor.schemas.hacker_gif.result import Result
from graphql_api.tenor.resolvers.hacker_gif import resolve_hacker_gifs


API_KEY = environ.get('TENOR_API_KEY')


class HackerGifQuery(ObjectType):
    hacker_gifs = Field(
        Result,
        key=String(default_value=API_KEY),
        limit=Int(default_value=20),
        query=String(default_value='hacker'),
        resolver=resolve_hacker_gifs
    )
