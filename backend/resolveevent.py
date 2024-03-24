from helper import close_out_event   
from app import create_app, db

def resolve_event():
    app = create_app()
    with app.app_context():
        from models import Event
        name = input('Name: ')
        actual = int(input('Actual: '))
        
        event = Event.query.filter_by(name=name).first()
        pivot = event.pivot

        event.result = actual

        db.session.add(event)
        db.session.commit()

        if (actual >= pivot):
            highlow = 1
        if (actual < pivot):
            highlow = -1

        print("highlow " + str(highlow))

        close_out_event(name, int(highlow))

resolve_event()