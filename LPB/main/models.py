# This main models.py file contains all the models to store personal and industry experience.

from django.db import models

# Create your models here.


class SkillExpertise(models.Model):
    """
        DOCSTRING:
        The SkillExpertise model is served as an Abstract Model responsible for storing skill names and expertise level
        for different skills such as a speaking languages, tools and technologies as well as industry knowledge
    """
    EXPERTISE_CHOICES = (
        (20, 'Novice'),
        (40, 'Beginner'),
        (60, 'Skillful'),
        (80, 'Experienced'),
        (100, 'Expert')
    )

    name = models.CharField(max_length=50, blank=False, null=True, help_text="Provide the Specified Skill Name", verbose_name="Skill Name", unique=True)
    expertise_level = models.CharField(max_length=50, blank=False, null=True, help_text="Provide the Expertise Level for the specified skill", verbose_name="Expertise Level", choices=EXPERTISE_CHOICES)
    icon = models.CharField(max_length=50, blank=True, null=True, help_text="Provide the icon code for the specified skill", verbose_name="Skill Icon Code", unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.title()
        super().save(*args, **kwargs)

    class Meta:
        abstract = True


class SpeakingLanguage(SkillExpertise):
    """
        DOCSTRING:
        This SpeakingLanguage model is responsible for storing all the Speaking Languages, we set a __str__ dunder method
        to display a default string format of the instance and we overwrote the save method, this way all the entries will
        be capitalized.
    """


class Tool(SkillExpertise):
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

    tool_type = models.CharField('Tool Type', max_length=10, blank=False, null=True, help_text='Indicate the tool type', choices=TOOL_CHOICES)

    def __str__(self):
        return '{} ({})'.format(self.name, self.tool_type)


class IndustryKnowledge(SkillExpertise):
    """
        DOCSTRING:
        This main IndustryKnowledge model is responsible of storing all the industries with experience in.
    """


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
    description = models.CharField('Project Description', max_length=250, blank=False, null=True, help_text='Provide a project description')

    def __str__(self):
        return self.name

    def __save__(self, *args, **kwargs):
        self.name = self.name.title()
        super().save(*args, **kwargs)


class Certification(models.Model):
    """
        DOCSTRING:
        This certification main model is responsible for storing the Certifications obtained
    """
    institution = models.CharField('Institution', max_length=100, blank=False, null=True, help_text="Indicate the institution which provided the certification")
    institution_logo = models.ImageField('Institution Logo', blank=False, null=True, help_text="Provide the Institution Logo")
    name = models.CharField('Certification Name', max_length=100, blank=False, null=True, help_text="Indicate the certification name")
    url = models.URLField('Verification URL', blank=True, null=True, help_text='Provide a verification url if existent')
    image = models.ImageField('Certification Image', blank=True, null=True, help_text='Provide a certification image if no verification url is available ')

    def __str__(self):
        return self.name

    def __save__(self, *args, **kwargs):
        self.name = self.name.title()
        self.institution = self.institution.title()
        super().save(*args, **kwargs)



