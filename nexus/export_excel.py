import os
import django
import pandas as pd
import time

# Django settings setup
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")
django.setup()

from getintouch.models import contact  # mee app model

# Excel file path
EXCEL_PATH = "C:/Users/dell/OneDrive/Desktop/nexus-with-backend/nexus/excel_files/contacts_live.xlsx"
INTERVAL = 10  # Update every 10 seconds

def export_to_excel():
    try:
        contacts = contact.objects.all().values('name', 'email', 'phone_number', 'service')
        df = pd.DataFrame(list(contacts))
        df.to_excel(EXCEL_PATH, index=False)
        print("Excel updated successfully!")
    except PermissionError:
        print("Error: Excel file is open. Close it and retry.")
    except Exception as e:
        print(f"Unexpected error: {e}")

if __name__ == "__main__":
    print("Live Excel update started...")
    while True:
        export_to_excel()
        time.sleep(INTERVAL)
