from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from django.core.mail import EmailMessage
from .serializers import EmailSerializer
from .forms import DirectContactForm

# Create your views here.


class SendMail(APIView):

    serializer_class = EmailSerializer

    def post(self, request):
        direct_contact_form = DirectContactForm(request.data)
        if direct_contact_form.is_valid():
            first_name = direct_contact_form.data.get('first_name')
            last_name = direct_contact_form.data.get('last_name')
            contact = direct_contact_form.data.get('email')
            message = direct_contact_form.data.get('message')
            subject = 'Contact via Portfolio'
            content = 'Luis, you have received an email from {} {} - {} with the following content \n{}'.format(first_name, last_name, contact, message)
            email = EmailMessage(subject=subject, body=content, to=['adolfoluis.rl@gmail.com'])
            email.send()
            return Response({'data': 'Your email has been sent successfully'}, status=HTTP_200_OK)
        return Response({'error': direct_contact_form.errors}, status=HTTP_400_BAD_REQUEST)