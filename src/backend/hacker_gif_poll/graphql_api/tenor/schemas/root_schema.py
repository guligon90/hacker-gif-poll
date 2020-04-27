
# Third party imports
import graphene

# Project imports
from graphql_api.tenor.schemas.hacker_gif.result import Result
from graphql_api.tenor.queries.hacker_gif import HackerGifQuery


class RootQuery(HackerGifQuery):
    """
    Aggregates queries from multiple schemas
    """
    pass

ROOT_SCHEMA = graphene.Schema(
    query=RootQuery,
    auto_camelcase=False # Remove conflict with API response attributes
)
