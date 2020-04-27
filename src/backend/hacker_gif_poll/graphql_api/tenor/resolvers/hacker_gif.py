
# Project imports
from api.tenor import get_hacker_gifs
from graphql_api.tenor.schemas.hacker_gif.result import Result


def map_graphql_args_to_api_filters(args):
    """
    Maps the GraphQL query arguments to the corresponding
    query string filters accepted by the Tenor API.
    """
    mapped_filters = {}


    # At the moment, only the 'query' parameter has to be mapped
    # to the key 'q' which is acceptable by the Tenor API. Nevertheless,
    # the structure was generalized for all GraphQL query parameters.
    filter_switcher = {
        'query': 'q',
        'limit': 'limit',
        'key': 'key',
    }

    for key, value in args.items():
        filter_key = filter_switcher.get(key)
        mapped_filters.update({
            filter_key: value,
        })    

    return mapped_filters


def resolve_hacker_gifs(root, info, **args):
    try:
        params = map_graphql_args_to_api_filters(args)
        result_from_api = get_hacker_gifs(params)

        if result_from_api:
            return Result.create_from_data(result_from_api)

    except Exception as exc:
        raise Exception(str(exc))

