from flask import Blueprint, request
from flask_login import login_user, logout_user, login_required
from models import User
from werkzeug.security import generate_password_hash, check_password_hash
from helper import add_user

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

@auth.route('/signup', methods=['Post'])
def signup_post():
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')

    user = User.query.filter_by(email=email).first() # if there's a user already don't sign up

    if not username or not password or not email:
        return 'Not all fields filled out.'
    
    if user:
        return 'User with this email already exists'
    
    add_user(username=username, password=generate_password_hash(password), email=email)
    user = User.query.filter_by(email=email).first() # get user after signup to log in
    login_user(user)

    return 'user successfully signed up'

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return 'user logged out'