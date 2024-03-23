from app import db, create_app
from models import User, Event, Wager
from datetime import datetime
NEW_CREDITS = 50
app = create_app()

def add_user(username, password, email):
    with app.app_context():
        user = User(email = email, credits = NEW_CREDITS, password = password, username = username)
        db.session.add(user)
        db.session.commit()

def add_bet(name, desc, end, creator_id):
    with app.app_context():
        bet = Bet(name = name, desc = desc, start = datetime.now, end = end, active = True, creator_id = creator_id)
        db.session.add(bet)
        db.session.commit()

def add_wager(bettor_id, amount, option_id, bet_id):
    with app.app_context:
        wager = Wager(better_id = bettor_id)

