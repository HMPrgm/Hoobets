from flask import Flask
from app import db, app

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=True)
    credits = db.Column(db.Integer)

    events = db.relationship('Event', backref='user')
    wagers = db.relationship('Wager', backref='user')

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    desc = db.Column(db.String(80), unique=True, nullable=False)
    start = db.Column(db.DateTime)
    end = db.Column(db.DateTime)
    active = db.Column(db.Boolean)
    creator_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    wagers = db.relationship('Wager', backref='event')
    options = db.relationship('Option', backref='event')


class Wager(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer)

    event_id = db.Column(db.Integer, db.ForeignKey('event.id'))
    bettor_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    option_id = db.Column(db.Integer, db.ForeignKey('option.id'))

class Option(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'))
    desc = db.Column(db.String(100))
    value = db.Column(db.Integer)











with app.app_context():
    db.create_all()