from django.urls import path
from .views import SendMail

app_name = 'main'
urlpatterns = [
    path('send_mail/', SendMail.as_view(), name='send_mail')
]