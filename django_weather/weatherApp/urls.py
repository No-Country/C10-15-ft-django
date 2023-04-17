from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="/"),
    path('login/', views.login, name="login"),
    path('register/', views.login, name="register"),  
    path('about/', views.login, name="about"),  
]