from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
import re
import json

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['Post']) # the login method
def login_post():
    from models import User

    data = request.get_json()
    email = data['email']
    password = data['password']
    remember = data['remember']
    
    print(email)
    print(password)
    print(remember)
    
    from models import User
    user = User.query.filter_by(email=email).first()

    # check if user exists first
    if not user or not check_password_hash(user.password, password):

        return {
            'status':'error',
            'message':'check login details'
        }


    # if this passes, login the user
    login_user(user, remember=remember)

    return {
        'status': 'ok',
    }


@auth.route('/signup', methods=['Post'])
def signup_post():

    from models import User
    from helper import add_user

    data = (request.get_json())
    print(data['email'])
    
    username = data['username']
    email = data['email']
    password = data['password']
    confirmpassword = data['confirmpassword']


    print(username + email + password + confirmpassword)

    user = User.query.filter_by(email=email).first() # if there's a user already don't sign up
    if not password == confirmpassword:
        response = {
        "status":"error",
        "message":"Passwords do not match"}
        return jsonify(response)
    
    # email + password validation: to fix
    # if not re.search("", password):
    #     response = {
    #     "status":"error",
    #     "message":"Password invalid"}
    #     return jsonify(response)

    # if not re.search("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$", email):
    #     response = {
    #     "status":"error",
    #     "message":"Invalid email"}
    #     return jsonify(response)
    
    if not username or not password or not email:
        response = {
        "status":"error",
        "message":"Not all fields filled out."}
        return jsonify(response)
    
    if user:
        response = {
        "status":"error",
        "message":"user already exists"
        }
        return jsonify(response)
    
    add_user(username=username, password=generate_password_hash(password), email=email)
    user = User.query.filter_by(email=email).first() # get user after signup to log in
    login_user(user) # login the user after they signup

    response = {
        "status":"ok"
    }
    return jsonify(response)

@auth.route('/isloggedin')
def isloggedin():
    from models import User
    print((current_user.is_authenticated))

    if current_user.is_authenticated:
        return {
        'isloggedin': 1 if current_user.is_authenticated else 0,
        "name": current_user.username,
        "credits": current_user.credits
        }
    else:
        return {
            "isloggedin" : 0,
        }
    

@auth.route('/logout', methods=['Post', 'Get'])
@login_required
def logout():
    logout_user()
    return {
        "status":"ok"
    }
