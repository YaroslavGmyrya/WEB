from rest_framework import serializers
from .models import UserPromo

class UserPromoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPromo
        fields = ['name', 'email', 'screenshot']