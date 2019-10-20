from djongo import models
import datetime

# Create your models here.
class Entradas(models.Model):
    titulo = models.CharField(max_length=100, blank=True, null=True)
    descripcion = models.TextField(blank=True, null=True)
    imagen = models.ImageField(upload_to='images/', blank=False, null=False)
    fecha_creacion = models.DateTimeField(auto_now=True)


class Entrada2(models.Model):
    titulo = models.CharField(max_length=100, blank=True, null=True)
    descripcion = models.TextField(blank=True, null=True)
    imagen = models.ImageField(upload_to='images/', blank=False, null=False)
    fecha_creacion = models.DateTimeField(auto_now=True)