#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r .\django_weather\requirements.txt

# poetry install

python .\django_weather\manage.py collectstatic --no-input
python manage.py migrate