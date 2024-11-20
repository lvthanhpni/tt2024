# Generated by Django 5.1.3 on 2024-11-20 07:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eob_website', '0008_alter_folder_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='material',
            name='preview_image',
        ),
        migrations.CreateModel(
            name='FilePreviewImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='previews/')),
                ('material', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eob_website.material')),
            ],
        ),
    ]