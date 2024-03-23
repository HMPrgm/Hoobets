from flask import Blueprint, request
from flask_login import login_user
from models import User
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['Post'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False
    
    user = User.query.filter_by(email=email).first()

    # check if user exists first
    if not user() or not check_password_hash(user.password, password):
        return 'Error: Check your login details'


    # if this passes, login the user
    login_user(user, remember=remember)

    return 'User logged in'



