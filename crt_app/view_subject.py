from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Subject
from .serializers import SubjectSerializer
class SubjectView(APIView):
    # GET: Retrieve subject(s)
    def get(self, request, *args, **kwargs):
        # Check for specific subject ID
        sub_id = request.GET.get('sub_id', None)
        
        if sub_id:
            # If sub_id is passed, retrieve that subject
            subject = get_object_or_404(Subject, sub_id=sub_id)
            serializer = SubjectSerializer(subject)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        
        # Otherwise, retrieve all subjects
        subjects = Subject.objects.all()
        serializer = SubjectSerializer(subjects, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    # POST: Create a new subject
    def post(self, request, *args, **kwargs):
        serializer = SubjectSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_201_CREATED)
        
        return Response({"status": "error", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    # PATCH: Update an existing subject
    def patch(self, request, *args, **kwargs):
        sub_id = request.data.get('sub_id')
        
        if not sub_id:
            return Response(
                {"status": "error", "message": "Subject ID is required"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Get the subject object
        subject = get_object_or_404(Subject, sub_id=sub_id)
        
        # Partially update the subject
        serializer = SubjectSerializer(subject, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        
        return Response({"status": "error", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    # DELETE: Remove an existing subject
    def delete(self, request, *args, **kwargs):
        sub_id = request.GET.get('sub_id', None)
        
        if not sub_id:
            return Response(
                {"status": "error", "message": "Subject ID is required to delete"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Get the subject to delete
        subject = get_object_or_404(Subject, sub_id=sub_id)
        subject.delete()
        
        return Response({"status": "success", "message": "Subject deleted successfully"}, status=status.HTTP_200_OK)
