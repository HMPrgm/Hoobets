from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
main = Blueprint('main', __name__)



@main.route("/addwager", methods=['Post'])
def addwager():
    from models import Event, Option
    data = request.get_json()
    name = data['name']
    highlow = data['highlow']
    amount = data['amount']
    event_id = Event.query.filter_by(name=name).first().id
    print(highlow)

    if highlow == 1 :
        option_id = Option.query.filter_by(value=1).first().id
    else: 
        option_id = Option.query.filter_by(value=-1).first().id

    print(option_id)
    
    from helper import add_wager
    add_wager(bettor_id=current_user.id, amount=amount, option_id=option_id, bet_id=event_id)

    return {
        'hi':'hi'
    }

@login_required
@main.route("/addevent", methods=['Post']) #adds an event 
def addevent():
    data = request.get_json()
    name = data['name']
    desc = data['desc']
    start = data['start']
    end = data['end']
    from helper import add_event, add_option
    event_id = add_event(name=name, desc=desc, start=start, end=end)


    
@login_required
@main.route("/bets/<bet_title>", methods=['Post', 'Get']) # gives json with event information given a title
def getWagerScreen(bet_title):

    from models import Event
    event = Event.query.filter_by(name=bet_title).first() # get corresponding event
    if (event):
        response = getEventJson(event)
    
    from models import Option
    options = Option.query.filter_by(event_id=event.id).all() # get corresponding options

    optionsJson = []
    for option in options:
        optionsJson.append(getOptionJson(option))
    
    
    response['options'] = optionsJson
    response['status'] = 'ok'
    return jsonify(response)

@main.route("/bets", methods=['Post', 'Get']) # gets all bets info
def getEvents():
    from models import Event
    events = Event.query.all() 
    response = [] # list of dicts

    if not events:
        return {
            "status":"error",
            "message":"no events"
        }
    
    for event in events:
        dict = getEventJson(event)
        response.append(dict)
    
    response.append({'status':'ok'}) # add ok status
    return jsonify(response)

@main.route("/profile/<username>")
def getUser(username):
    print(username)
    from models import User, Wager
    user = User.query.filter_by(username=username).first()
    response = []

    if not user:
        return {
            'status':'error',
            'message':'user does not exist'
        }
    
    wagers = Wager.query.filter_by(bettor_id = user.id)
    for wager in wagers:
        response.append(getWagerJson(wager))
    
    return jsonify(response)

def getWagerJson(wager):
    from models import Event, Option
    dict = {}
    event_id = wager.event_id
    print(event_id)
    event = Event.query.filter_by(id = event_id).first()

    option_id = wager.option_id
    option = Option.query.filter_by(id = option_id).first()

    dict['option'] = getOptionJson(option)
    dict['event'] = getEventJson(event)
    dict['amount'] = wager.amount
    return dict

def getUserJson(user):
    dict = {}
    dict['username'] = user.username
    dict['email'] = user.email
    dict['credits'] = user.credits


def getEventJson(event):
    dict = {}
    dict['id'] = event.id
    dict['active'] = 1 if True else 0
    dict['name'] = event.name
    dict['description'] = event.desc
    dict['start'] = event.start
    dict['end'] = event.end
    dict['pivot'] = event.pivot
    return dict

def getOptionJson(option): # convert an event into appropriate json
    dict = {}
    dict["event_id"] = option.event_id
    dict["desc"] = option.desc
    return dict

