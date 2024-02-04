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

@api_view(['GET', 'POST'])
def getBlogs(request):
    if request.method == 'GET':
        return getBlogsList()
    
    if request.method == 'POST':
        return createBlog(request)

@api_view(['GET', 'DELETE'])
def getBlog(request, pk):
    if request.method == 'GET':
        return getBlogDetail(request, pk)
    
    if request.method == 'DELETE':
        return deleteBlog(pk)
    
@api_view(['PUT', 'GET'])
def update_blog(request, pk):
    return update_blog_details(request ,pk)
    
    


