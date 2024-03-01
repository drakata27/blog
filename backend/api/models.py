from django.db import models
from django.contrib.auth.models import User

# Create your models here.

def upload_path(instance, filename):
    return '/'.join(['covers', str(instance.title), filename])

class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField(null=True, blank=True)
    subtitle = models.TextField(null=True, blank=True)
    cover = models.ImageField(blank=True, null=True, upload_to=upload_path)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.title}'
    