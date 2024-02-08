from .models import Blog
from .serializers import BlogSerializer
from rest_framework.response import Response

def get_blogs_list():
    blogs = Blog.objects.all().order_by('-created')
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

def create_blog(request):
    data = request.data
    # cover = data.pop('cover', None)
    
    blog = Blog.objects.create(
        title=data['title'],
        subtitle=data['subtitle'],
        cover=data['cover'],
        body=data['body']
    )

    # If cover is provided, save it separately
    # if cover:
    #     blog.cover = cover
    #     blog.save()

    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)

def get_blog_detail(request, pk):
    blog = Blog.objects.get(id=pk)
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)

def delete_blog(pk):
    blog = Blog.objects.get(id=pk)
    blog.delete()
    return Response('Blog was deleted')

def update_blog_details(request, pk):
    data = request.data
    blog = Blog.objects.get(id=pk)
    serializer = BlogSerializer(instance=blog, data=data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
