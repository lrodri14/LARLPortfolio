from rest_framework.serializers import Serializer, CharField, EmailField


class EmailSerializer(Serializer):
    first_name = CharField()
    last_name = CharField()
    email = EmailField()
    message = CharField()

