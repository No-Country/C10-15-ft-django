from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="/"),
    path('login/', views.login, name="login"),
    path('user/', views.userin, name="userin"),
    path('register/', views.register, name="register"),  
    path('about/', views.about, name="about"),
    path('contact/', views.contact, name="contact"), 

]