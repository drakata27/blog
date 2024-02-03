from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.TextField(null=True, blank=True)
    subtitle = models.TextField(null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.title}'