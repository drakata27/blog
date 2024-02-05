from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('blogs/', views.get_blogs, name="blogs"),
    path('blogs/<str:pk>/', views.get_blog, name="blog"),
    path('blogs/<str:pk>/edit', views.update_blog, name="update-blog"),
]