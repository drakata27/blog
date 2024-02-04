from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('blogs/', views.getBlogs, name="blogs"),
    path('blogs/<str:pk>/', views.getBlog, name="blog"),
    path('blogs/<str:pk>/edit', views.update_blog, name="update-blog"),
]