from django.contrib import admin
from .models import Sneaker,User

# Register your models here.

@admin.register(Sneaker)
class SneakerAdmin(admin.ModelAdmin):
    def short_description(self, obj):
        # Ограничиваем длину описания до 50 символов
        return (obj.description[:50] + '...') if len(obj.description) > 50 else obj.description
    short_description.short_description = 'Description'  # Настраиваем заголовок столбца

    # Используем short_description вместо полного поля description
    list_display = (
        'id', 'name', 'short_description', 'article', 'in_stock',
        'raiting', 'size', 'price', 'sex', 'color', 'compound',
        'country', 'main_photo'
    )
    list_display_links = ('name',)
    ordering = ['id']
    search_fields = ['name', 'description']  # Добавлено описание в поиск
    list_filter = ['article', 'sex', 'color', 'country']  # Добавлены дополнительные фильтры

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'user_name', 'password', 'display_sneakers'  # Используем кастомный метод
    )
    list_display_links = ('user_name',)
    ordering = ['id']
    search_fields = ['user_name', 'password']  # Исключаем sneakers из поиска
    list_filter = ['user_name', 'password']  # Исключаем sneakers из фильтров

    def display_sneakers(self, obj):
        # Возвращаем список кроссовок через запятую
        return ", ".join([sneaker.name for sneaker in obj.sneakers.all()])

    display_sneakers.short_description = 'Кроссовки'  # Заголовок для столбца