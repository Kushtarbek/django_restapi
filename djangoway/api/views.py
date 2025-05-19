from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from serializer import UserSerialiazer

@api_view(['GET'])
def get_user(request):
    return Response(UserSerialiazer({"name": 'pedro', "age": 25}).data)