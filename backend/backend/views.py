from django.http import HttpResponse

def saludo(request):
    return HttpResponse('Creando el entorno django para empezar a trabajar.')