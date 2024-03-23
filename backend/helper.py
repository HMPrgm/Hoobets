from app import db, create_app
from models import User, Event, Wager, Option
from datetime import datetime
NEW_CREDITS = 50
app = create_app()

def add_user(username, password, email):
    with app.app_context():
        user = User(email = email, credits = NEW_CREDITS, password = password, username = username)
        db.session.add(user)
        db.session.commit()

def add_event(name, desc, end, creator_id):
    with app.app_context():
        event = Event(name = name, desc = desc, start = datetime.now, end = end, active = True, creator_id = creator_id)
        db.session.add(event)
        db.session.commit()

def add_wager(bettor_id, amount, option_id, bet_id):
    with app.app_context:
        wager = Wager(bettor_id = bettor_id, amount = amount, option_id = option_id, bet_id = bet_id)
        db.session.add(wager)
        db.session.commit()

def add_option(id, event_id, desc, value):
    with app.app_context:
        option = Option(id = id, event_id = event_id, desc = desc, value = value)
        db.session.add(option)
        db.session.commit()
        

