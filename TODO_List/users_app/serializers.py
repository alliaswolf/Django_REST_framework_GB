from rest_framework import serializers

from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'birthday',
        )


class CustomUserSerializerStaff(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'birthday',
            'is_staff',
            'is_superuser',
        )
