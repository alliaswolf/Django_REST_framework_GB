from django.contrib import admin
from .models import CustomUser
# Register your models here.


class CustomUserAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'username',
        'first_name',
        'last_name',
        'email',
        'birthday',
        'is_staff',
    )
    search_fields = (
        'username',
        'email',
        'first_name',
        'last_name',
        'birthday',
    )


admin.site.register(CustomUser, CustomUserAdmin)