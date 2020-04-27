# Third party imports
from graphene import ID, Int, List, ObjectType, String, relay, Float, Boolean

# Project imports
from graphql_api.tenor.schemas.common import MediaTypes
from graphql_api.tenor.schemas.hacker_gif.result_media import ResultMedia
from graphql_api.tenor.schemas.hacker_gif.utils import (
    remove_non_implemented_fields,
    move_gif_formats_into_media_payloads
)


class ResultItem(ObjectType):

    id = ID()
    composite = String()
    created = Float()
    hasaudio = Boolean()
    item_id = String()
    itemurl = String()
    media = List(ResultMedia)
    shares = Int()
    tags = List(String)
    title = String()
    url = String()
    

    @classmethod
    def create_from_data(cls, data):
        parsed_data = {}
        filtered_data = remove_non_implemented_fields(cls, data)

        for key, value in filtered_data.items():
            if key == 'media':
                media_items = value[0] if isinstance(value, list) else value

                media_list = [
                    ResultMedia.create_from_data(media)
                    for media in move_gif_formats_into_media_payloads(media_items)
                ]

                parsed_data.update({key: media_list})
            elif key == 'id':
                parsed_data.update({'item_id': media_list})
            else:
                parsed_data.update({key: value})

        return cls(**parsed_data)
