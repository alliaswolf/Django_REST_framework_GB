from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from users_app.models import CustomUser

from .models import TODO, Project

# Create your tests here.


class TestProjectViews(TestCase):
    url = "/api/projects/project/"
    title = "New title"
    link = "https://nowhere.com"
    edit_project_data = {
        'title': 'Edit title',
        'link': "https://everywhere.com"
    }

    @staticmethod
    def get_auth_superuser():
        return CustomUser.objects.create_superuser(username="John",
                                                   email='John@mail.com',
                                                   birthday=1999,
                                                   password="admin")

    @staticmethod
    def get_auth_user():
        return CustomUser.objects.create_user(username="David",
                                              email='David@mail.com',
                                              birthday=2008,
                                              password="123")

    def get_new_project(self):
        return Project.objects.create(title=self.title, link=self.link)

    def test_get_detail(self):
        admin = self.get_auth_superuser()
        user = self.get_auth_user()
        new_project = self.get_new_project()
        new_project.users_worked.add(admin.pk, user.pk)
        client = APIClient()
        response = client.get(f"{self.url}{new_project.pk}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(admin, new_project.users_worked.get(pk=admin.pk))
        self.assertEqual(user, new_project.users_worked.get(pk=user.pk))

    def test_edit_detail_guest(self):
        user = self.get_auth_user()
        new_project = self.get_new_project()
        new_project.users_worked.add(user.pk)
        client = APIClient()
        response = client.put(f"{self.url}{new_project.pk}/",
                              data=self.edit_project_data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(user, new_project.users_worked.get(pk=user.pk))

    def test_edit_detail_admin(self):
        admin = self.get_auth_superuser()
        new_project = self.get_new_project()
        new_project.users_worked.add(admin.pk)
        client = APIClient()
        client.login(username='John@mail.com', password='admin')
        response = client.patch(f"{self.url}{new_project.pk}/",
                                data=self.edit_project_data)
        project_edit = Project.objects.get(pk=new_project.pk)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(admin, new_project.users_worked.get(pk=admin.pk))
        self.assertEqual(project_edit.link, self.edit_project_data['link'])
        self.assertEqual(project_edit.title, self.edit_project_data['title'])
        client.logout()
