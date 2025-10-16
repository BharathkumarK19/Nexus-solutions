from django.shortcuts import render

def landing(request):
    return render(request,"nexus.html")

def projects(request):
    return render(request,"project.html")

def about_us(request):
    return render(request,"about-us.html")

def mentor_ship(request):
    return render(request,"mentor-ship.html")

def web_dev(request):
    return render(request,"website-dev.html")

