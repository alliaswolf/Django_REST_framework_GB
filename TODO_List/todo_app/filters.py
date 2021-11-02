from django_filters import rest_framework as filters
from .models import Project, TODO


class ProjectFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['title']


class TODOFilter(filters.FilterSet):
    project__title = filters.CharFilter(field_name='project__title',
                                        lookup_expr='contains')

    class Meta:
        model = TODO
        fields = ['project__title']