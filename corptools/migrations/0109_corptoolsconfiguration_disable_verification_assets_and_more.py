# Generated by Django 4.2.13 on 2024-07-11 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('corptools', '0108_jumpclonefilter'),
    ]

    operations = [
        migrations.AddField(
            model_name='corptoolsconfiguration',
            name='disable_verification_assets',
            field=models.BooleanField(default=False, help_text='Allow ESI to provide data that does not match the ESI Assets Spec'),
        ),
        migrations.AddField(
            model_name='corptoolsconfiguration',
            name='disable_verification_notifications',
            field=models.BooleanField(default=False, help_text='Allow ESI to provide data that does not match the ESI Notification Spec'),
        ),
    ]
