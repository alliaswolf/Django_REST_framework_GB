from django.urls import path

from .views import CustomUserDetailView, CustomUserListView

app_name = "users_app"

urlpatterns = [
    path('users/', CustomUserListView.as_view()),
    path('users/<int:pk>', CustomUserDetailView.as_view()),
]
