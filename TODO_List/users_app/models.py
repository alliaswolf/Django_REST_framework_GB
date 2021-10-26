from django.contrib.auth.models import AbstractUser, UserManager as AbstractUserManager
from django.db import models

# Create your models here.


class UserManager(AbstractUserManager):
    pass


class CustomUser(AbstractUser):
    username = models.CharField(max_length=64,
                                verbose_name='Username',
                                help_text="Username")
    birthday = models.PositiveIntegerField(verbose_name="User's year of birth",
                                           help_text="User's year of birth")
    email = models.EmailField(max_length=64,
                              unique=True,
                              verbose_name="Email address",
                              help_text="User's email address")
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'birthday']
    objects = UserManager()

    class Meta:
        verbose_name = 'Custom User'
        verbose_name_plural = 'Custom Users'
        ordering = ['id', 'username', 'email']

    def __str__(self) -> str:
        return self.username