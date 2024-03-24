from helper import close_out_event   
from app import create_app

def resolve_event():
    app = create_app()
    with app.app_context():
        from models import Event
        name = input('Name: ')
        actual = int(input('Actual: '))
        
        pivot = Event.query.filter_by(name=name).first().pivot
        if (actual >= pivot):
            highlow = 1
        if (actual < pivot):
            highlow = -1

        print("highlow " + str(highlow))

        close_out_event(name, int(highlow))

resolve_event()