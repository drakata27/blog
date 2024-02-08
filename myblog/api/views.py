from rest_framework.response import Response
from rest_framework import viewsets
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .utils import *

# Create your views here.
@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/blog/',
            'method': 'GET',
            'title': None,
            'body': None,
            'description': 'Returns an array of blog'
        },
        {
            'Endpoint': '/blog/id',
            'method': 'GET',
            'title': None,
            'body': None,
            'description': 'Returns a single blog object'
        },
        {
            'Endpoint': '/blog/create/',
            'method': 'POST',
            'title': {'title': ""},
            'body': {'body': ""},
            'description': 'Creates new blog with data sent in post request'
        },
        {
            'Endpoint': '/blog/id/update/',
            'method': 'PUT',
            'title': {'title': ""},
            'body': {'body': ""},
            'description': 'Creates an existing blog with data sent in post request'
        },
        {
            'Endpoint': '/blog/id/delete/',
            'method': 'DELETE',
            'title': None,
            'body': None,
            'description': 'Deletes an exiting blog'
        },
    ]

    return Response(routes)

@api_view(['GET', 'POST'])
def get_blogs(request):
    if request.method == 'GET':
        return get_blogs_list()
    
    if request.method == 'POST':
        return create_blog(request)

@api_view(['GET', 'DELETE'])
def get_blog(request, pk):
    if request.method == 'GET':
        return get_blog_detail(request, pk)
    
    if request.method == 'DELETE':
        return delete_blog(pk)
    
@api_view(['PUT', 'GET'])
def update_blog(request, pk):
    return update_blog_details(request ,pk)
    
    


