from django.urls import path
from . import views

urlpatterns = [
    path('', views.add_contact, name='add_contact'),  
    # '' → means /getintouch/ URL
]
