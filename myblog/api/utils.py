from .models import Blog
from .serializers import BlogSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

def get_blogs_list():
    blogs = Blog.objects.all().order_by('-created')
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

def create_blog(request):

    if request.user.is_authenticated:
        data = request.data
        blog = Blog.objects.create(
            title=data['title'],
            subtitle=data['subtitle'],
            cover=data['cover'],
            body=data['body']
        )

        serializer = BlogSerializer(blog, many=False)
        return Response(serializer.data)
    return Response({'error': 'Authentication credentials were not provided.'}, status=403)

def get_blog_detail(pk):
    blog = Blog.objects.get(id=pk)
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)

def delete_blog(request, pk):
    if request.user.is_authenticated:
        blog = Blog.objects.get(id=pk)
        blog.delete()
        return Response('Blog was deleted')
    return Response({'error': 'Authentication credentials were not provided.'}, status=403)


def update_blog_details(request, pk):
    if request.user.is_authenticated:
        data = request.data
        blog = Blog.objects.get(id=pk)
        serializer = BlogSerializer(instance=blog, data=data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)
    print(request.user)
    return Response({'error': 'Authentication credentials were not provided.'}, status=403)