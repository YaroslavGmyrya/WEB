from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .serializers import UserPromoSerializer
from django.shortcuts import render
import pdb

class UserPromoAPI(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        serializer = UserPromoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Данные успешно загружены!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
