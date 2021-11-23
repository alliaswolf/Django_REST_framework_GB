from djangorestframework_camel_case.render import (
    CamelCaseBrowsableAPIRenderer, CamelCaseJSONRenderer)
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet

from .filters import ProjectFilter, TODOFilter
from .models import TODO, Project
from .serializers import (ProjectSerializer, ProjectSerializerBase,
                          ProjectSerializerWithoutLink, TODOSerializer,
                          TODOSerializerBase, TODOSerializerWithoutDate)

# Create your views here.


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = Project.objects.all()
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter

    def get_serializer_class(self):
        if self.request.method in ["GET"]:
            if self.request.version == "0.2":
                return ProjectSerializerWithoutLink
            return ProjectSerializer
        return ProjectSerializerBase


class TODOViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = TODO.objects.all()
    pagination_class = TODOLimitOffsetPagination
    filterset_class = TODOFilter

    def get_serializer_class(self):
        if self.request.method in ["GET"]:
            if self.request.version == "0.2":
                return TODOSerializerWithoutDate
            return TODOSerializer
        return TODOSerializerBase

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()
