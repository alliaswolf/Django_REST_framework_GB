from django.contrib import admin
from .models import TODO, Project
# Register your models here.


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'link')
    search_fields = ('title', 'link')


class TODOAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_active', 'date_created',
                    'date_modified', 'author', 'project')
    search_fields = ('title', 'author', 'project')


admin.site.register(TODO, TODOAdmin)
admin.site.register(Project, ProjectAdmin)