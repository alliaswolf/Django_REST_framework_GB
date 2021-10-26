from django.core.management.base import BaseCommand
from users_app.models import CustomUser
import random


class Command(BaseCommand):
    help = "Create random user"

    def handle(self, *args, **kwargs):
        username_staff = "admin"
        CustomUser.objects.create_superuser(
            username=username_staff,
            email=f"{username_staff}{CustomUser.objects.count()+1}@mail.com",
            birthday=random.randint(1980, 2021),
            password="admin")

        count_normal_user = 3
        usernames = ['Adam', 'Ben', 'Chuck', 'Anna', 'Kate', 'Mark']

        for i in range(count_normal_user):
            username = random.choice(usernames)
            CustomUser.objects.create_user(
                username=username,
                email=f"{username}{CustomUser.objects.count()+1}@mail.com",
                birthday=random.randint(1980, 2021),
                password="123")
