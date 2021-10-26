from django import forms


class DirectContactForm(forms.Form):
    """
        DOCSTRING:
        This DirectContactForm form is responsible and used to build contact me message, this message will be used to be
        sent through SMTP to a personal email address.
    """
    name = forms.CharField(label='First Name', required=True, widget=forms.TextInput(), error_messages='Please provide your first name!')
    last_name = forms.CharField(label='Last Name', required=True, widget=forms.TextInput(), error_messages='Please provide your last name!')
    email = forms.EmailField(label='Email Address', required=True, widget=forms.Textarea(), error_messages='Please provide your email!')
    message = forms.CharField(label='Message', required=True, widget=forms.Textarea(), error_messages='A message is required!')