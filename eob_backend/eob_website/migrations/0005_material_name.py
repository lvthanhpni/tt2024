# Generated by Django 5.1.3 on 2024-11-14 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eob_website', '0004_material_description_material_upload_date_reviewpost'),
    ]

    operations = [
        migrations.AddField(
            model_name='material',
            name='name',
            field=models.CharField(default='File_upload', max_length=255),
        ),
    ]