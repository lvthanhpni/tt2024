# Generated by Django 5.1.2 on 2024-11-12 03:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eob_website', '0002_alter_folder_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='folder',
            name='folder_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
