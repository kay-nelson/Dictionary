from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Word


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ["id", "title", "user"]
        extra_kwargs = {"user": {"read_only": True}}