from django.shortcuts import redirect, render

from django.conf import settings
from .models import contact


def add_contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone_number')
        service = request.POST.get('service')

        # Save to DB
        new_contact = contact.objects.create(
            name=name, email=email, phone_number=phone, service=service
        )

        return redirect('home')


    return render(request, 'getintouch.html')
