from django.db import models

# Create your models here.

class Sneaker(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    description = models.CharField(max_length=2000,verbose_name='Описание')
    article = models.CharField(max_length=15, verbose_name='Артикль')
    in_stock = models.PositiveSmallIntegerField(verbose_name='В налиии')
    raiting = models.PositiveSmallIntegerField(verbose_name='Оценка')
    size = models.JSONField(default=list,verbose_name='Размер')
    price = models.IntegerField(verbose_name='Цена')
    sex = models.CharField(max_length=10,verbose_name='Пол')
    color = models.JSONField(default=list,verbose_name='Цвет')
    compound = models.CharField(max_length=100,verbose_name='Состав')
    country = models.CharField(max_length=30,verbose_name="Страна")
    main_photo = models.ImageField(upload_to='images/',default='/default.jpg')

    class Meta:
        verbose_name = 'Кроссовки'
        verbose_name_plural = 'Кроссовки'

class User(models.Model):
    user_name = models.CharField(max_length=30, verbose_name='Имя')
    password = models.CharField(max_length=30, verbose_name='Пароль')
    sneakers = models.ManyToManyField(Sneaker, related_name="Basket_item", verbose_name="Кроссовки в корзине",blank=True)

    class Meta:
        verbose_name = 'Пользователи'
        verbose_name_plural = 'Пользователи'
