import json

from django.test import TestCase
from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APIClient, APISimpleTestCase, APITestCase
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


class TestMath(APISimpleTestCase):
    def test_square(self):
        x = 5
        self.assertEqual(25, x * x)

    def test_sum(self):
        x, y = 5, 10
        self.assertEqual(15, x + y)


class TestTODOViewSet(APITestCase):
    url = "/api/projects/todo/"
    todo_data = {
        "text": "About something.",
        "title": "My note.",
    }
    project_data = {"title": "Main project.", "link": "https://everywhere.com"}
    edit_todo_data = {
        "text": "You mustn't read the note.",
        "title": "Only my note.",
    }

    @staticmethod
    def get_auth_superuser():
        return CustomUser.objects.create_superuser(username="Randy",
                                                   email='Randy@mail.com',
                                                   birthday=2001,
                                                   password="admin")

    def get_new_project(self, admin):
        project = Project.objects.create(title=self.project_data['title'],
                                         link=self.project_data['link'])
        project.users_worked.add(admin)
        return project

    def test_get_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_admin(self):
        admin = self.get_auth_superuser()
        created_project = self.get_new_project(admin)
        new_todo = TODO.objects.create(text=self.todo_data['text'],
                                       title=self.todo_data['title'],
                                       author=admin,
                                       project=created_project)
        self.client.login(username='Randy@mail.com', password='admin')
        response = self.client.patch(f"{self.url}{new_todo.pk}/",
                                     data=self.edit_todo_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo_edit = TODO.objects.get(pk=new_todo.pk)
        self.assertEqual(todo_edit.text, self.edit_todo_data['text'])

    def test_edit_mixer(self):
        new_todo = mixer.blend(TODO)
        admin = self.get_auth_superuser()
        self.client.login(username='Randy@mail.com', password='admin')
        response = self.client.patch(f"{self.url}{new_todo.pk}/",
                                     data=self.edit_todo_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo_edit = TODO.objects.get(pk=new_todo.pk)
        self.assertEqual(todo_edit.text, self.edit_todo_data['text'])

    def test_get_detail_mixer(self):
        new_todo = mixer.blend(TODO, title="Mixer is here.")
        response = self.client.get(f"{self.url}{new_todo.pk}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_todo = json.loads(response.content)
        self.assertEqual(response_todo['title'], 'Mixer is here.')
