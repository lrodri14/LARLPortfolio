from django.urls import path
from .views import *

app_name = 'main'
urlpatterns = [
    path('tools/', ToolsAndTechnologies.as_view(), name='tools'),
    path('speaking_languages/', SpeakingLanguages.as_view(), name='speaking_language'),
    path('industry_knowledge/', IndustriesKnowledge.as_view(), name='industry_knowledge'),
    path('tools/', ToolsAndTechnologies.as_view(), name='tools'),
    path('certifications/', Certification.as_view(), name='certifications'),
    path('send_mail/', SendMail.as_view(), name='send_mail')
]