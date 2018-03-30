# flake8: noqa
from .env import ENV_BOOL, ENV_STR

DEBUG = ENV_BOOL('DEBUG', False)
SECRET_KEY = ENV_STR('SECRET_KEY')
