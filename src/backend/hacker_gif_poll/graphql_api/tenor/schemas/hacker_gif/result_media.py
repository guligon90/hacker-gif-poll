# Third party imports
from graphene import ID, Int, List, ObjectType, String, Float, Field, Enum

# Project imports
from graphql_api.tenor.schemas.common import MediaTypes
from graphql_api.tenor.schemas.hacker_gif.utils import remove_non_implemented_fields


class ResultMedia(ObjectType):

    id = ID
    gif_format = Field(MediaTypes)
    url = String()
    dims = List(Int)
    duration = Float()
    preview = String()
    size = Int()

    @classmethod
    def create_from_data(cls, data):
        parsed_data = {}
        filtered_data = remove_non_implemented_fields(cls, data)

        for key, value in filtered_data.items():
            if key == 'gif_format':
                parsed_data.update({key: value.lower() if isinstance(value, str) else None})
            else:
                parsed_data.update({key: value})

        return cls(**parsed_data)
