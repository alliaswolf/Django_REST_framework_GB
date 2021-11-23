from rest_framework.routers import DefaultRouter

from .views import ProjectViewSet, TODOViewSet

app_name = "todo_app"

router = DefaultRouter()
router.register('project', ProjectViewSet)
router.register('todo', TODOViewSet)

urlpatterns = router.urls
