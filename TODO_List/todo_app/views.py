from rest_framework.viewsets import ModelViewSet
from djangorestframework_camel_case.render import CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer
from .models import Project, TODO
from .serializers import ProjectSerializer, TODOSerializer

# Create your views here.


class ProjectViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class TODOViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = TODO.objects.all()
    serializer_class = TODOSerializer