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
    
@main.route("/bets", methods=['Post'])
def getEvents():
    from models import Event
    events = Event.query.all()
    response = [] # list of dicts

    for event in events:
        dict = {}
        dict['id'] = event.id
        dict['active'] = 1 if True else 0
        dict['name'] = event.name
        dict['description'] = event.desc
        dict['start'] = event.start
        dict['end'] = event.end
        response.append(dict)
    
    return jsonify(response)