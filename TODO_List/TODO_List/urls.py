"""TODO_List URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from graphene_django.views import GraphQLView
from rest_framework import permissions
from rest_framework.authtoken import views
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)
from users_app.views import CustomAuthToken

schema_view = get_schema_view(
    openapi.Info(
        title="TODO Project",
        default_version='0.1',
        description="Documentation to out project",
        contact=openapi.Contact(email="admin@admin.ru"),
        license=openapi.License(name="GB License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('users_app.urls')),
    path('api-token-auth/', CustomAuthToken.as_view()),
    path('api/projects/', include('todo_app.urls')),
    path('api/token/', TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/',
         TokenRefreshView.as_view(),
         name='token_refresh'),
    path('swagger<str:format>/', schema_view.without_ui()),
    path('swagger/',
         schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    path('redoc/',
         schema_view.with_ui('redoc', cache_timeout=0),
         name='schema-redoc'),
    path("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=False))),
]
