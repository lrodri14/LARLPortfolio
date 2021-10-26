# This main models.py file contains all the models to store personal and industry experience.

from django.db import models

# Create your models here.


class SpeakingLanguage(models.Model):
    """
        DOCSTRING:
        This SpeakingLanguage model is responsible for storing all the Speaking Languages, we set a __str__ dunder method
        to display a default string format of the instance and we overwrote the save method, this way all the entries will
        be capitalized.
    """
    name = models.CharField('Language', max_length=20, blank=False, null=True, unique=True, help_text='Indicate language')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.capitalize()
        super().save(*args, **kwargs)


class Tool(models.Model):
    """
        DOCSTRING:
        This main tool model is responsible of storing all the tools used in the career
    """
    TOOL_CHOICES = (
        ('LANGUAGE', 'Language'),
        ('FRAMEWORK', 'Framework'),
        ('LIBRARY', 'Library'),
        ('SOFTWARE', 'Software'),
        ('OTHER', 'Other')
    )

    EXPERTISE_CHOICES = (
        (20, 'Novice'),
        (40, 'Beginner'),
        (60, 'Skillful'),
        (80, 'Experienced'),
        (100, 'Expert')
    )

    tool_type = models.CharField('Tool Type', max_length=10, blank=False, null=True, help_text='Indicate the tool type', choices=TOOL_CHOICES)
    name = models.CharField('Tool Name', max_length=25, blank=False, null=True, help_text='Indicate the tool name')
    expertise = models.IntegerField(blank=False, null=True, help_text='Indicate expertise level for the tool specified', choices=EXPERTISE_CHOICES)

    def __save__(self, *args, **kwargs):
        self.name = self.name.capitalize()
        super().save(*args, **kwargs)


class IndustryKnowledge(models.Model):
    """
        DOCSTRING:
        This main IndustryKnowledge model is responsible of storing all the industries with experience in.
    """
    name = models.CharField('Industry Name', max_length=50, blank=False, null=True, unique=True, help_text='Indicate the industry')

    def __save__(self, *args, **kwargs):
        self.name = self.name.title()
        super().save(*args, **kwargs)


class Project(models.Model):
    """
        DOCSTRING:
        This main Project model is responsible for storing all the projects already in production.
    """
    name = models.CharField('Project Name', max_length=50, blank=False, null=True, unique=True, help_text='Indicate the project name')
    start_date = models.DateField('Start Date', blank=False, null=True, help_text='Indicate the date the project was born')
    end_date = models.DateField('End Date', blank=False, null=True, help_text='Indicate the date the project was deployed into production')
    logo = models.ImageField('Logo', blank=False, null=True, help_text="Provide the project's logo")
    url = models.URLField('Project App', blank=False, null=True, help_text="Provide the project's direction")







