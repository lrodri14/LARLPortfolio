from django import forms
from django.core.exceptions import ValidationError


class DirectContactForm(forms.Form):
    """
        DOCSTRING:
        This DirectContactForm form is responsible and used to build contact me message, this message will be used to be
        sent through SMTP to a personal email address. Cleaning will be executed before generating the message.
    """
    first_name = forms.CharField(label='First Name', required=True, widget=forms.TextInput())
    last_name = forms.CharField(label='Last Name', required=True, widget=forms.TextInput())
    email = forms.EmailField(label='Email Address', required=True, widget=forms.Textarea())
    message = forms.CharField(label='Message', required=True, widget=forms.Textarea())

    def clean(self):
        cleaned_data = super().clean()
        cleaned_name = cleaned_data.get('first_name')
        cleaned_last_name = cleaned_data.get('last_name')
        cleaned_email = cleaned_data.get('email')
        cleaned_message = cleaned_data.get('message')

        if not cleaned_name \
            or not cleaned_last_name \
            or not cleaned_email \
            or not cleaned_message:
                raise ValidationError('Information must be complete in order to proceed', code='incomplete_information')

        return cleaned_data


