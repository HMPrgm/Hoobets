from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

db = SQLAlchemy()
login_manger = LoginManager()

def create_app():

    # initialize app and configs
    app = Flask(__name__)
    




    app.static_url_path="../frontend/public/templates"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.sqlite'

    from auth import auth
    app.register_blueprint(auth)

    from main import main
    app.register_blueprint(main)

    # init db and login manager
    db.init_app(app)
    login_manger.init_app(app)
    return app


app = create_app()
from models import User, Event, Wager, Option

app.secret_key = 'super secret key'
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
admin = Admin(app, name='microblog', template_mode='bootstrap3')
admin.add_view(ModelView(User, db.session))
admin.add_view(ModelView(Event, db.session))
admin.add_view(ModelView(Wager, db.session))
admin.add_view(ModelView(Option, db.session))



@login_manger.user_loader
def load_user(user_id):
    return User.query.get(user_id)

if __name__ == "__main__":
    app.run(debug=True)

