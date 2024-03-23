from flask import Blueprint, request
from flask_login import login_user, logout_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash
import re

auth = Blueprint('main', __name__)

@auth.route('/login', methods=['Post'])
def login_post():
    from models import User

    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False
    
    print(email)
    print(password)
    print(remember)
    
    from models import User
    user = User.query.filter_by(email=email).first()

    # check if user exists first
    if not user or not check_password_hash(user.password, password):

        return 'Error: Check your login details'


    # if this passes, login the user
    login_user(user, remember=remember)

    return 'User logged in'

@auth.route('/signup', methods=['Post'])
def signup_post():
    from models import User
    from helper import add_user

    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    confirmpassword = request.form.get('confirmpassword')


    user = User.query.filter_by(email=email).first() # if there's a user already don't sign up
    if not password == confirmpassword:
        return 'Passwords do not match'
    
    if not re.search("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$", password):
        return 'Password does not have at least 1 number, 1 letter, and 8 characters'

    if not re.search("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", email):
        return 'Invalid email'
    
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