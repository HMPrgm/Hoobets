from flask import Blueprint, request
from flask_login import login_required
main = Blueprint('auth', __name__)

@login_required
@main.route("/addevent", methods=['Post'])
def addevent():
    name = request.form.get('name')
    desc = request.form.get('desc')
    start = request.form.get('start')
    end = request.form.get('end')
    
    