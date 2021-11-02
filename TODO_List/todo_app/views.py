from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from djangorestframework_camel_case.render import CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer
from .filters import ProjectFilter, TODOFilter
from .models import Project, TODO
from .serializers import ProjectSerializer, TODOSerializer

# Create your views here.


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TODOViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = TODO.objects.all()
    serializer_class = TODOSerializer
    pagination_class = TODOLimitOffsetPagination
    filterset_class = TODOFilter

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()
