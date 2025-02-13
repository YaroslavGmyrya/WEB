from django.db import models

# Create your models here.

class UserPromo(models.Model):
    name = models.CharField(max_length=30,blank=False)
    email = models.CharField(max_length=200,blank=False)
    screenshot = models.ImageField(upload_to='photos/')

