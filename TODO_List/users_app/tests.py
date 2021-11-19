from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate

from .models import CustomUser
from .views import CustomUserListView

# Create your tests here.


class TestCustomUserViews(TestCase):
    url = "/api/users/"
    auth_user_create = {
        'email': 'Brock@mail.com',
        'username': "Brock",
        'birthday': 1989,
        'password': '123'
    }

    @staticmethod
    def get_auth_superuser():
        return CustomUser.objects.create_superuser(username="Robert",
                                                   email='Robert@mail.com',
                                                   birthday=1991,
                                                   password="123")

    def test_get_list_quest(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = CustomUserListView.as_view()
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.auth_user_create, format='json')
        view = CustomUserListView.as_view()
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_user(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.auth_user_create, format='json')
        force_authenticate(request, self.get_auth_superuser())
        view = CustomUserListView.as_view()
        response = view(request)
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_get_list_for_superuser(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        force_authenticate(request, self.get_auth_superuser())
        view = CustomUserListView.as_view()
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
