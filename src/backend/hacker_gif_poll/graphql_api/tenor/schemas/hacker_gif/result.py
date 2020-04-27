
# Third party imports
from graphene import ObjectType, String, Int, List, ID

# Project imports
from graphql_api.tenor.schemas.hacker_gif.result_item import ResultItem
from graphql_api.tenor.schemas.hacker_gif.utils import remove_non_implemented_fields


class Result(ObjectType):
    
    id = ID()
    weburl = String()
    results = List(ResultItem) 
    next = Int()

    @classmethod
    def create_from_data(cls, data):
        parsed_data = {}
        filtered_data = remove_non_implemented_fields(cls, data)

        for key, value in filtered_data.items():
            if key == 'results':
                parsed_data.update({
                    key: [ResultItem.create_from_data(result_item) for result_item in value]
                })
            else:
                parsed_data.update({key: value})

        return cls(**parsed_data)
