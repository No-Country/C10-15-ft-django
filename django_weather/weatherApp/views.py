import requests
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import authenticate, logout, login as auth_login
from django.db import IntegrityError
from django.contrib.auth.models import User
import requests


def index(request):

    if 'city' in request.POST:
        city = request.POST['city']
    else:
        city = 'Lima'

    app_key = '2c6fca1ef64f124ab2be792989b962f1'
    url = f"https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={app_key}&lang=es"
    r = requests.get(url).json()

    forecasts_five = r['list'][:30:3]

    data_clima = []
    for forecast in forecasts_five:
        fecha = forecast['dt_txt']
        humidity = forecast['main']['humidity']
        pressure = forecast['main']['pressure']
        visibility = forecast['visibility'] / 1000
        thermal = forecast['main']['feels_like']
        thermal_sensation = round(thermal - 275.15)
        wind = forecast['wind']['speed']
        temp_kelvin = forecast['main']['temp']
        temp = round(temp_kelvin - 273.15)  # transforma de > kelvin a Celsius
        # transforma de > celsius a farenheit
        temp_farenheit = round((temp * 9/5) + 32)

        descripcion = forecast['weather'][0]['description']
        icon = forecast['weather'][0]['icon']

        # se le agrega a la lista vacia los datos del clima
        # para mostrar el mismo de los proximos 5 dias y 3 horas de cada dia.
        data_clima.append({
            'fecha': fecha,
            'description': descripcion,
            'icon': icon,
            'temp': temp,
            'temp_farenheit': temp_farenheit,

        })

    return render(request, 'index.html', {'data_clima': data_clima, 'description': descripcion, 'date': fecha,
                                          'icon': icon, 'temp': temp, 'temp_farenheit': temp_farenheit, 'city': city, 'humidity': humidity,
                                          'pressure': pressure, 'visibility': visibility, 'wind': wind, 'thermal_sensation': thermal_sensation})


def login(request):
    if request.method == 'POST':
        user = authenticate(
            username=request.POST['email'],
            password=request.POST['password']
        )
        if user is not None:
            # Log the user in and redirect to the dashboard
            auth_login(request, user)
            return redirect('userin')
        else:
            # Render the login page with an error message
            return render(request, 'login.html', {
                'form': AuthenticationForm,
                'error': 'Email or Password is incorrect'
            })
    else:
        # Render the login page
        return render(request, 'login.html', {'form': AuthenticationForm})


def register(request):
    if request.method == 'GET':
        return render(request, 'register.html', {
            'form': UserCreationForm
        })
    else:
        # user register
        try:
            user = User.objects.create_user(username=request.POST['email'],
                                            password=request.POST['password'])
            user.backend = 'django.contrib.auth.backends.ModelBackend'
            user.save()
            auth_login(request, user)
            return redirect('userin')
        except IntegrityError:
            return render(request, 'register.html', {
                'form': UserCreationForm,
                'error': 'El usuario ya existe'
            })


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')


def userin(request):
    return render(request, 'userin/userin.html')
