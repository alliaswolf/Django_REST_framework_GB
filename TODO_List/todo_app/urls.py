from rest_framework.routers import DefaultRouter

from .views import ProjectViewSet, TODOViewSet

router = DefaultRouter()
router.register('project', ProjectViewSet)
router.register('todo', TODOViewSet)

urlpatterns = router.urls
