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

def add_event(name, desc, creator_id, pivot):
    with app.app_context():
        event = Event(name = name, desc = desc, active = True, creator_id = creator_id, pivot=pivot)
        id = event.id
        db.session.add(event)
        
        db.session.commit()
        return id

def add_wager(bettor_id, amount, option_id, bet_id):
    with app.app_context():
        wager = Wager(bettor_id = bettor_id, amount = amount, option_id = option_id, event_id = bet_id)
        db.session.add(wager)
        db.session.commit()

def add_option(event_id, desc, value):
    with app.app_context():
        option = Option(event_id = event_id, desc = desc, value = value)
        db.session.add(option)
        db.session.commit()

def close_out_event(event_name, winning_option_desc):

        # get event
        event = Event.query.filter_by(name=event_name).first()
        total_losing_credits = 0

        if (not event.active):
            return 'event not active'

        # get winning option
        winning_option = Option.query.filter_by(event_id=event.id, desc=winning_option_desc).first()

        # get losing options
        losing_options = Option.query.filter(Option.event_id == event.id, Option.id != winning_option.id).all()

        #sum losing 
        losing_wagers = []
        for option in losing_options:
            for wager in Wager.query.filter(Wager.option_id == option.id):
                losing_wagers.append(wager)


        total_losing_credits = sum(wager.amount for wager in losing_wagers) # sum total losing credits
        
        winning_wagers = Wager.query.filter(Wager.option_id == winning_option.id).all()

        for wager in winning_wagers:
            wagering_user = wager.bettor_id
            wager_amount = wager.amount

            wagering_user.credits += wager_amount  # Return original bet
            
            if total_losing_credits > 0:
                proportion = wager_amount / total_losing_credits
                proportionate_losers_credits = sum(option.value * proportion for option in losing_options)
                wagering_user.credits += proportionate_losers_credits  # Additional credits from losers
        for wager in losing_wagers:
            wagering_user = wager.user
            wagering_user.credits -= wager.amount
        event.active = False

        # do in app context
        with app.app_context():
            db.session.commit()
        return total_losing_credits

if __name__ == '__main__':
    add_wager(1, 100, 1, 1)
