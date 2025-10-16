from django.db import models

class contact(models.Model):
    SERVICE_CHOICES = [
        ('General', 'General'),
        ('Website Development', 'Website Development'),
        ('Mentorship', 'Mentorship'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField(unique=False)
    phone_number = models.CharField(max_length=12)
    service = models.CharField(max_length=50, choices=SERVICE_CHOICES, default='General')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
