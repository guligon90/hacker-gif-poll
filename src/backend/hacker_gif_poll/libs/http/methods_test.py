import json


from libs.http import methods, urllib_mock


def _mock_urllib(monkeypatch):
    monkeypatch.setattr(
        'urllib3.PoolManager',
        urllib_mock.PoolManager,
        raising=True
    )


def test_simple_get_request(monkeypatch):
    endpoint = '/simple/get/'
    _mock_urllib(monkeypatch)
    response = methods.get(endpoint)

    assert response['request_method'] == 'GET'
    assert response['request_url'] == endpoint
    assert response['request_body'] is None


def test_complex_get_request(monkeypatch):
    endpoint = '/complex/get/'
    _mock_urllib(monkeypatch)
    response = methods.get(endpoint, {'a': 1, 'b': 2})

    assert response['request_method'] == 'GET'
    assert response['request_url'] == endpoint + '?a=1&b=2'
    assert response['request_body'] is None


def test_url_encoding(monkeypatch):
    endpoint = '/complex/get/'
    params = {'a': 'url encoding', 'b': 'tÃ©st'}
    _mock_urllib(monkeypatch)
    response = methods.get(endpoint, params)

    # C3A9 -> hex representation of UTF-8 'Ã©'
    # https://en.wikipedia.org/wiki/Percent-encoding
    expected = '/complex/get/?a=url+encoding&b=t%C3%83%C2%A9st'
    assert response['request_url'] == expected


def test_get_headers(monkeypatch):
    endpoint = '/foo/bar'
    headers = {
        'what': 'ever'
    }
    _mock_urllib(monkeypatch)
    response = methods.get(endpoint, None, headers)

    assert response['request_headers'] == headers


def test_post_request(monkeypatch):
    endpoint = '/simple/post/'
    data = {'a': 1, 'b': 2}
    _mock_urllib(monkeypatch)
    response = methods.post(endpoint, data)

    assert response['request_method'] == 'POST'
    assert response['request_url'] == endpoint
    assert response['request_body'] == json.dumps(data)


def test_post_headers(monkeypatch):
    endpoint = '/foo/bar'
    headers = {
        'what': 'ever'
    }
    _mock_urllib(monkeypatch)
    response = methods.post(endpoint, None, headers)

    assert response['request_headers'] == headers


def test_put_request(monkeypatch):
    endpoint = '/simple/put/'
    data = {'a': 1, 'b': 2}
    _mock_urllib(monkeypatch)
    response = methods.put(endpoint, data)

    assert response['request_method'] == 'PUT'
    assert response['request_url'] == endpoint
    assert response['request_body'] == json.dumps(data)


def test_put_headers(monkeypatch):
    endpoint = '/foo/bar'
    headers = {
        'what': 'ever'
    }
    _mock_urllib(monkeypatch)
    response = methods.put(endpoint, None, headers)

    assert response['request_headers'] == headers


def test_patch_request(monkeypatch):
    endpoint = '/simple/patch/'
    data = {'a': 1, 'b': 2}
    _mock_urllib(monkeypatch)
    response = methods.patch(endpoint, data)

    assert response['request_method'] == 'PATCH'
    assert response['request_url'] == endpoint
    assert response['request_body'] == json.dumps(data)


def test_patch_headers(monkeypatch):
    endpoint = '/foo/bar'
    headers = {
        'what': 'ever'
    }
    _mock_urllib(monkeypatch)
    response = methods.patch(endpoint, None, headers)

    assert response['request_headers'] == headers


def test_delete_request(monkeypatch):
    endpoint = '/delete/stuff/1/'
    _mock_urllib(monkeypatch)
    response = methods.delete(endpoint)

    assert response['request_method'] == 'DELETE'
    assert response['request_url'] == endpoint
    assert response['request_body'] is None


def test_delete_headers(monkeypatch):
    endpoint = '/foo/bar'
    headers = {
        'what': 'ever'
    }
    _mock_urllib(monkeypatch)
    response = methods.delete(endpoint, headers=headers)

    assert response['request_headers'] == headers
