from flask import Blueprint, request, jsonify
from flask_login import login_required
main = Blueprint('auth', __name__)

@login_required
@main.route("/addevent", methods=['Post']) #adds an event 
def addevent():
    data = request.get_json()
    name = data['name']
    desc = data['desc']
    start = data['start']
    end = data['end']
    from helper import add_event
    add_event(name=name, desc=desc, start=start, end=end)
    
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

def getEventJson(event):
    dict = {}
    dict['id'] = event.id
    dict['active'] = 1 if True else 0
    dict['name'] = event.name
    dict['description'] = event.desc
    dict['start'] = event.start
    dict['end'] = event.end
    return dict

def getOptionJson(option): # convert an event into appropriate json
    dict = {}
    dict["event_id"] = option.event_id
    dict["desc"] = option.desc
    return dict

