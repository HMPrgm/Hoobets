from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.static_url_path="../frontend/public/templates"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.sqlite'

    db.init_app(app)
    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)
