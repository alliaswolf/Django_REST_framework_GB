from requests.auth import HTTPBasicAuth
from rest_framework.test import APITestCase, CoreAPIClient, RequestsClient


class TestRequestsClient(APITestCase):
    url_todo = "http://127.0.0.1:8000/api/projects/todo/"
    url_users = "http://127.0.0.1:8000/api/users/"

    def test_get_request(self):
        client = RequestsClient()
        response = client.get(self.url_todo)
        assert response.status_code == 200
        assert response.headers['Content-Type'] == 'application/json'

    def test_api_client(self):
        client = CoreAPIClient()
        client.session.auth = HTTPBasicAuth('admin@mail.ru', 'admin')
        schema = client.get(self.url_users)
        assert schema.get('count') == len(schema.get('results'))


# Запуск и проверка живых результатов
# python manage.py shell < todo_app/live_tests.py
real_test = TestRequestsClient()
real_test.test_api_client()
real_test.test_get_request()
