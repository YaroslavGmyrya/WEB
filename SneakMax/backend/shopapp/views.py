import json
from django.http import JsonResponse
from rest_framework.views import APIView
from random import shuffle
from django.db.models import Q
from .serializers import SneakerSerializer
from .models import Sneaker,User
from django.db.models import F
from django.http import HttpResponse
import pdb

class SneakerAPI(APIView):
    def get(self, request):
        # Получаем исключаемые ID
        excluded_ids = request.GET.get('excluded_ids', '')
        excluded_ids = list(map(int, excluded_ids.split(','))) if excluded_ids else []

        # Получаем значение параметра 'sex' из query string
        sex = request.GET.get('sex', '').split(',')
        sex = [s.strip() for s in sex if s.strip()]  # Удаляем пустые значения и пробелы

        # Преобразуем sizes в массив чисел
        sizes = request.GET.get('sizes', '')
        try:
            sizes = list(map(int, sizes.split(','))) if sizes else None
        except ValueError:
            return JsonResponse({'error': 'Некорректный формат параметра sizes'}, status=400)

        # Фильтруем записи по исключённым ID
        all_records = Sneaker.objects.exclude(id__in=excluded_ids).filter(in_stock__gt = 0).order_by('?')

        if sex:
            all_records = all_records.filter(sex__in=sex)

        # Если размеры переданы, фильтруем записи по наличию хотя бы одного размера из списка
        if sizes:
            filter_records = []
            for record in all_records:
                # Если хотя бы один размер из переданных содержится в записи
                if any(size in record.size for size in sizes):
                    filter_records.append(record)
        else:
             filter_records = all_records
        # Преобразуем записи в список словарей
       # all_records = list(all_records.values())
        serializer = SneakerSerializer(filter_records, many=True)
        # Если записей больше нет, возвращаем пустой список
        if not filter_records:
            return JsonResponse([], safe=False)

        # Перемешиваем записи

        # Берём максимум 6 записей
        return JsonResponse(serializer.data[:6], safe=False)
    
    def post(self, request):
        data = json.loads(request.body)
        names = [node.get('name') for node in data if 'name' in node]        
        Sneaker.objects.filter(name__in = names).update(in_stock=F("in_stock") - 1)
        return HttpResponse({"status" : "ok"},status=200)

class AuthorizationAPI(APIView):
    def post(self, request):
        data = json.loads(request.body)
        name = data.get('userName', None)
        password = data.get('password', None)

        if name and password:
            if User.objects.filter(user_name = name).exists():
                return HttpResponse({"error":"User already exist"}, status=400)
            User.objects.create(user_name = name,password=password)
            return HttpResponse({"status":"ok"}, status=200)
        return HttpResponse({"error":"name or password is None"}, status=400)
    def get(self,request):
        name = request.GET.get('name', None)
        password = request.GET.get('password', None)
        if name and password:
            if User.objects.filter(user_name = name, password=password).exists():
                return JsonResponse({'status':"ok"}, safe=False)
            return JsonResponse({"error": "User not exist"}, status=400)
        return JsonResponse({"error": "name or password is None"}, status=400)


class BasketAPI(APIView):
    def get(self, request):
        name = request.GET.get('name', None)
        print(name)
        sneakers = User.objects.get(user_name=name).sneakers.all()
        serializer = SneakerSerializer(sneakers, many=True)
        return JsonResponse(serializer.data, safe=False)
    

    def post(self, request):
        data = json.loads(request.body)
        name = data.get('userName', None)
        id = data.get('id', None).split(",")
        
        user = User.objects.get(user_name = name)
        sneakers = Sneaker.objects.filter(id__in=id)

        user.sneakers.clear()
        for sneaker in sneakers:
            user.sneakers.add(sneaker)

        return JsonResponse({"status":"ok"}, safe=False)

