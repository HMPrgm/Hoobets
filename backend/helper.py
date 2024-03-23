from app import db
from models import User
NEW_CREDITS = 50

def add_user(username, password, email):
    user = User(email = email, credits = NEW_CREDITS, password = password, username = username)
    db.session.add(user)
    db.session.commit()