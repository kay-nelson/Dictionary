from django.db import models
from django.contrib.auth.models import User


class Word(models.Model):
    title = models.CharField(max_length=100)
    

    def __str__(self):
        return self.title
