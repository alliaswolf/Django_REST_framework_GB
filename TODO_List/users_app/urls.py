from django.urls import path

from .views import CustomUserDetailView, CustomUserListView

urlpatterns = [
    path('users/', CustomUserListView.as_view()),
    path('users/<int:pk>', CustomUserDetailView.as_view()),
]
