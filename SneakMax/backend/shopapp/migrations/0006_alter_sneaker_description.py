# Generated by Django 5.1.2 on 2025-01-14 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopapp', '0005_alter_sneaker_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sneaker',
            name='description',
            field=models.CharField(max_length=2000, verbose_name='Описание'),
        ),
    ]
