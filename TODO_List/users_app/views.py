from django.db.models import query
from rest_framework.response import Response
from rest_framework import generics, serializers
from .models import CustomUser
from .serializers import CustomUserSerializer

# Create your views here.


class CustomUserListView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class CustomUserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer