from app import db, create_app
from models import User, Event, Wager, Option
from datetime import datetime, timedelta
NEW_CREDITS = 50
app = create_app()

def add_user(username, password, email):
    with app.app_context():
        user = User(email = email, credits = NEW_CREDITS, password = password, username = username)
        db.session.add(user)
        db.session.commit()

def add_event(name, desc, creator_id, pivot):
    with app.app_context():
        event = Event(name = name, desc = desc, active = True, creator_id = creator_id, pivot=pivot, start=datetime.now(), end=datetime.now()+timedelta(1))
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

def close_out_event(event_name, highlow):
    with app.app_context():

        # get all wagers for the bet
        event_id = Event.query.filter_by(name=event_name).first().id
        wagers = Wager.query.filter_by(event_id=event_id).all()

        winning_sum_tokens = 0
        losing_sum_tokens = 0

        for wager in wagers:
            # get option
            option = Option.query.filter_by(id=wager.option_id).first()
            if option.value == highlow:
                winning_sum_tokens += wager.amount
            else:
                losing_sum_tokens += wager.amount
        
        print(winning_sum_tokens)
        print(losing_sum_tokens)
        
        for wager in wagers:
            # get option
            option = Option.query.filter_by(id=wager.option_id).first()
            if option.value == highlow:
                event = Event.query.filter_by(id=wager.event_id).first()
                print(event.active)

                if not event.active:
                    print('event inactive')
                    return {
                        'status':'error',
                        'message': 'event.active'
                    }
                
                proportion = wager.amount / winning_sum_tokens

                # return original credits
                user = User.query.filter_by(id=wager.bettor_id).first()
                user.credits += wager.amount

                # add credits based off proportion of winning pot
                user.credits += int(losing_sum_tokens * proportion)

                event.active= False
                db.session.add(user)
                db.session.add(event)

                db.session.commit()
            else:
                # nothing happens, loser loses their bet
                pass




    
if __name__ == '__main__':
    name = input('Name: ')
    highlow = input("highlow: ")

    print(name)
    print(highlow)

    close_out_event(name, int(highlow))
