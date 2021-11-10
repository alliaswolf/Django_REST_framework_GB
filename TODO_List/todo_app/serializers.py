from rest_framework import serializers
from users_app.serializers import CustomUserSerializer

from .models import TODO, Project


class ProjectSerializer(serializers.ModelSerializer):
    users_worked = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class TODOSerializer(serializers.ModelSerializer):
    author = CustomUserSerializer()
    project = ProjectSerializer()

    class Meta:
        model = TODO
        fields = "__all__"
