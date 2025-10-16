from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.landing, name="home"),
    path('projects/', views.projects, name="projects"),
    path('about_us/', views.about_us, name="about_us"),
    path('web_dev/', views.web_dev, name="web_dev"),
    path('mentor_ship/', views.mentor_ship, name="mentor_ship"),
   
    # Include the getintouch app URLs
    path('getintouch/', include('getintouch.urls'),name="getintouch"),  
]
