from rest_framework import serializers
from .models import Project, TODO
from users_app.serializers import CustomUserSerializer


class ProjectSerializer(serializers.ModelSerializer):
    users_worked = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class TODOSerializer(serializers.ModelSerializer):
    author = CustomUserSerializer()
    project = serializers.StringRelatedField()

    class Meta:
        model = TODO
        fields = "__all__"
