from django.contrib.auth.models import User, Group
from rest_framework import serializers
from post.models import Entradas


class EntradasSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(use_url=True)
    class Meta:
        model = Entradas
        fields = ( 'id', 'titulo', 'descripcion', 'imagen')