from .models import Blog
from .serializers import BlogSerializer
from rest_framework.response import Response

def getBlogsList():
    blogs = Blog.objects.all().order_by('-updated')
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

def createBlog(request):
    data = request.data
    blog = Blog.objects.create(
        title=data['title'],
        subtitle=data['subtitle'],
        body=data['body']
    )
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)

def getBlogDetail(request, pk):
    blog = Blog.objects.get(id=pk)
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)

def deleteBlog(pk):
    blog = Blog.objects.get(id=pk)
    blog.delete()
    return Response('Blog was deleted')
