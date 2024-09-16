from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .models import Class
from .serializers import ClassSerializer
class ClassDetailView(APIView):
    def get(self, request):
        # If class_id is provided, return the details of a single class
        class_id = request.data.get('class_id')
        print(class_id)
        if class_id:
            print("hello")
            try:
                class_instance = Class.objects.get(class_id=class_id)
                serializer = ClassSerializer(class_instance)
                return Response(serializer.data)
            except Class.DoesNotExist:
                return Response({"error": "Class not found."}, status=status.HTTP_404_NOT_FOUND)
        
        # Otherwise, return all classes
        classes = Class.objects.all()
        print(classes)
        serializer = ClassSerializer(classes, many=True)
        return Response(serializer.data)
    def post(self, request):
        # Create a new class
        serializer = ClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request):
        # Partially update a class
        class_id = request.data.get('class_id')
        if not class_id:
            return Response({"error": "class_id is required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            class_instance = Class.objects.get(class_id=class_id)
        except Class.DoesNotExist:
            return Response({"error": "Class not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ClassSerializer(class_instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        # Delete a class
        class_id = request.data.get('class_id')
        if not class_id:
            return Response({"error": "class_id is required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            class_instance = Class.objects.get(class_id=class_id)
            class_instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Class.DoesNotExist:
            return Response({"error": "Class not found."}, status=status.HTTP_404_NOT_FOUND)
