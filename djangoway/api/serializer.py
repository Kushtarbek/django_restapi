from rest_framework import serialiazers
from .models import User

class UserSerialiazer(serialiazers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'