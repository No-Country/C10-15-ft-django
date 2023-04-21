#!/usr/bin/env bash
# exit on error
set -o errexit

# poetry install

<<<<<<< HEAD
pip install -r requirements.txt

=======
>>>>>>> ed07ced204ebe1307412e89c21ddecce8df1a5fc
python manage.py collectstatic --no-input
python manage.py migrate
