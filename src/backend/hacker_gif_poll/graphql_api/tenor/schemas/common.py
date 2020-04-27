
# Third party imports
from graphene import Enum


class MediaTypes(Enum):
    # GIF types
    GIF = 'gif'
    MEDIUMGIF = 'mediumgif'
    TINYGIF = 'tinygif'
    NANOGIF = 'nanogif'
    # MP4 types
    MP4 = 'mp4'
    LOOPEDMP4 = 'loopedmp4'
    TINYMP4 = 'tinymp4'
    NANOMP4 = 'nanomp4'
    # Webm types
    WEBM = 'webm'
    TINYWEBM = 'tinywebm'
    NANOWEBM = 'nanowebm'
