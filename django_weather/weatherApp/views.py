from django.shortcuts import render
import requests

def index(request):

    if 'city' in request.POST:
        city = request.POST['city']
    else:
        city = 'Lima'



    app_key= '2c6fca1ef64f124ab2be792989b962f1'
    url = f"https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={app_key}&lang=es"
    r = requests.get(url).json()

    data_clima = []
    for forecast in r["list"]:
        fecha = forecast['dt_txt']
        humidity = forecast['main']['humidity']
        pressure = forecast['main']['pressure']
        temp_kelvin = forecast['main']['temp']
        temp = round(temp_kelvin - 273.15) # transforma de > kelvin a Celsius
        temp_farenheit = round((temp * 9/5) + 32) # transforma de > celsius a farenheit

        descripcion = forecast['weather'][0]['description']
        icon = forecast['weather'][0]['icon']
        
        # se le agrega a la lista vacia los datos del clima 
        # para mostrar el mismo de los proximos 5 dias y 3 horas de cada dia.
        data_clima.append({
            'fecha': fecha,
            'description':descripcion,
            'icon':icon, 
            'temp':temp,
            'temp_farenheit':temp_farenheit,
        })
    
    

    return render(request, 'weatherApp/index.html', {'data_clima': data_clima, 'description':descripcion, 'fecha':fecha,
                                                     'icon':icon, 'temp':temp,'temp_farenheit':temp_farenheit, 'city':city, 'humidity':humidity, 'pressure':pressure})