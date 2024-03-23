from flask import Blueprint, request, jsonify
from flask_login import login_required
main = Blueprint('auth', __name__)

@login_required
@main.route("/addevent", methods=['Post'])
def addevent():
    name = request.form.get('name')
    desc = request.form.get('desc')
    start = request.form.get('start')
    end = request.form.get('end')
    
@login_required
@main.route("/bets/<bet_title>", methods=['Get'])
def getWagerScreen(bet_title):
    print(bet_title)

    from models import Event
    event = Event.query.filter_by(name=bet_title).first()
    if (event):
        response = getEventJson(event)

    response['status'] = 'ok'
    return jsonify(response)

@main.route("/bets", methods=['Post', 'Get'])
def getEvents():
    from models import Event
    events = Event.query.all()
    response = [] # list of dicts
    if not events:
        return {
            "status" : "error",
            "message": "event not found"
        }
    
    for event in events:
        getEventJson(event)
        response.append(dict)
    
    response['status'] = 'ok'
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
