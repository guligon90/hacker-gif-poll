import json


# pylint: disable=too-few-public-methods
class Response:

    def __init__(self, data):
        self.data = data


# pylint: disable=too-few-public-methods
class PoolManager:

    def __init__(self, *args, **kwargs):
        pass

    @classmethod
    def request(cls, method, url, body, headers):
        return Response(json.dumps({
            'request_method': method,
            'request_url': url,
            'request_body': body,
            'request_headers': headers
        }))
