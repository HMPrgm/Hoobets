from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from models import User, Event, Wager, Option

db = SQLAlchemy()
login_manger = LoginManager()

def create_app():

    # initialize app and configs
    app = Flask(__name__)
    app.static_url_path="../frontend/public/templates"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.sqlite'

    # init db and login manager
    db.init_app(app)
    login_manger.init_app(app)
    return app


app = create_app()

@login_manger.user_loader
def load_user(user_id):
    return User.query.get(user_id)

if __name__ == "__main__":
    app.run(debug=True)
