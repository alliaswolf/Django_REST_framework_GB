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
    start_date = filters.DateTimeFilter(
        field_name='date_created',
        lookup_expr='gte',
        label='Дата создания от (yyyy/mm/dd H:m:s):')
    end_date = filters.DateTimeFilter(
        field_name='date_created',
        lookup_expr='lte',
        label='Дата создания до (yyyy/mm/dd H:m:s):')

    class Meta:
        model = TODO
        fields = ['project__title', 'start_date', 'end_date']
