from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import *

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
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

@api_view(['GET'])
def getBlogs(request):
    return getBlogsList()

@api_view(['GET'])
def getBlog(request, pk):
    return getBlogDetail(request, pk)


