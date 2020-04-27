
# Project imports
from graphql_api.tenor.schemas.common import MediaTypes


def get_class_attributes(obj_type_class):
    attributes = []

    for attribute in obj_type_class.__dict__.keys():
        if not (attribute.startswith('__') and attribute.endswith('__') or attribute.startswith('_')):
            value = getattr(obj_type_class, attribute)
            if not callable(value):
                attributes.append(attribute)

    return attributes


def remove_non_implemented_fields(obj_type_class, data):
    """
    Method that compares the keys from an incoming dict
    and compares it with the list of implemented fields in
    the ObjectType instance, filtering out the keys are not
    inside the latter.
    """
    if not isinstance(data, dict):
        raise TypeError('The incoming data must be of type dict.')

    incoming_fields = list(data.keys())
    base_type_fields = get_class_attributes(obj_type_class)

    if data.get('id'):
        base_type_fields.append('id')

    filtered_data = {}
    for inc_field in incoming_fields:
        if inc_field in base_type_fields:
            filtered_data[inc_field] = data[inc_field]

    return filtered_data


def move_gif_formats_into_media_payloads(media_item):
    gif_formats = list(media_item.keys())

    media_payloads = []

    for gif_format in gif_formats:
        if gif_format and MediaTypes.get(gif_format):
            media_data = media_item.get(gif_format)
            media_payloads.append({
                'gif_format': gif_format,
                **media_data
            })
    
    return media_payloads
