from rest_framework.serializers import Serializer, ModelSerializer, CharField, EmailField
from .models import *


class BaseSkillsSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'


class ToolSerializer(BaseSkillsSerializer):
    class Meta(BaseSkillsSerializer.Meta):
        model = Tool


class SpeakingLanguageSerializer(BaseSkillsSerializer):
    class Meta(BaseSkillsSerializer.Meta):
        model = SpeakingLanguage


class IndustryKnowledgeSerializer(BaseSkillsSerializer):
    class Meta(BaseSkillsSerializer.Meta):
        model = IndustryKnowledge


class CertificationSerializer(BaseSkillsSerializer):
    class Meta(BaseSkillsSerializer.Meta):
        model = Certification


class ProjectSerializer(BaseSkillsSerializer):
    class Meta(BaseSkillsSerializer.Meta):
        model = Project


class EmailSerializer(Serializer):
    first_name = CharField()
    last_name = CharField()
    email = EmailField()
    message = CharField()

