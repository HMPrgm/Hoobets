from app import db, create_app
from models import User
NEW_CREDITS = 50

def add_user(username, password, email):
    app = create_app()
    with app.app_context():
        user = User(email = email, credits = NEW_CREDITS, password = password, username = username)
        db.session.add(user)
        db.session.commit()
