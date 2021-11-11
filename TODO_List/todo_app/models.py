from django.db import models
from users_app.models import CustomUser

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=32, verbose_name="Title of Project")
    link = models.URLField(null=True,
                           blank=True,
                           verbose_name="Link to the repository")
    users_worked = models.ManyToManyField(CustomUser)

    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        ordering = ['id', 'title']

    def __str__(self):
        return self.title


class TODO(models.Model):
    title = models.CharField(max_length=32, verbose_name="Title of TODO")
    text = models.TextField(verbose_name="Text in TODO")
    is_active = models.BooleanField(default=True,
                                    verbose_name='Is opened TODO')
    date_created = models.DateTimeField(auto_now_add=True,
                                        verbose_name="Date of create TODO")
    date_modified = models.DateTimeField(auto_now=True,
                                         verbose_name="Date of modify TODO")
    author = models.ForeignKey(CustomUser,
                               on_delete=models.PROTECT,
                               verbose_name="User created TODO")
    project = models.ForeignKey(Project,
                                on_delete=models.PROTECT,
                                verbose_name="Project")

    class Meta:
        verbose_name = 'TODO'
        verbose_name_plural = 'TODOs'
        ordering = ['id', 'title', 'date_created']

    def __str__(self):
        return self.title
