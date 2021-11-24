from rest_framework import serializers
from users_app.serializers import CustomUserSerializer

from .models import TODO, Project


class ProjectSerializerBase(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    users_worked = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class ProjectSerializerWithoutLink(serializers.ModelSerializer):
    users_worked = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        exclude = ['link']


class TODOSerializerBase(serializers.ModelSerializer):
    class Meta:
        model = TODO
        fields = "__all__"


class TODOSerializer(serializers.ModelSerializer):
    author = CustomUserSerializer()
    project = ProjectSerializer()

    class Meta:
        model = TODO
        fields = "__all__"


class TODOSerializerWithoutDate(serializers.ModelSerializer):
    author = CustomUserSerializer()
    project = ProjectSerializer()

    class Meta:
        model = TODO
        exclude = ['date_created', 'date_modified']
