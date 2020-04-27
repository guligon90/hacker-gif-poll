from urllib.parse import urlencode
import json
import urllib3
import certifi


def _generic_request(method, url, data, headers):
    http = urllib3.PoolManager(cert_reqs='CERT_REQUIRED', ca_certs=certifi.where())
    body = None if data == {} else json.dumps(data)
    response = http.request(
        method,
        url,
        body=body,
        headers=headers
    )
    return json.loads(response.data)


def get(url, params=None, headers=None):
    def make_request(endpoint):
        return _generic_request('GET', endpoint, {}, headers)

    if params is None:
        return make_request(url)

    query_url = url + '?' + urlencode(params, safe=',')

    return make_request(query_url)


def post(url, data, headers=None):
    return _generic_request('POST', url, data, headers)


def put(url, data, headers=None):
    return _generic_request('PUT', url, data, headers)


def patch(url, data, headers=None):
    return _generic_request('PATCH', url, data, headers)


def delete(url, params=None, headers=None):

    def make_request(endpoint):
        return _generic_request('DELETE', endpoint, {}, headers)

    if params is None:
        return make_request(url)

    query_url = url + '?' + urlencode(params)
    return make_request(query_url)