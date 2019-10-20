from django.shortcuts import render
from rest_framework import viewsets, status
from post.models import Entradas
from post.serializers import EntradasSerializer

# Create your views here.
class EntradasViewSet(viewsets.ModelViewSet):
    queryset = Entradas.objects.all()
    serializer_class = EntradasSerializer

    #def post(self, request, *args, **kwargs):
        #file = request.data['file']
        #imagen = Entradas.objects.create(imagen=file)
        #return HttpResponse(json.dumps({'message': "Uploaded"}), status=200)
    