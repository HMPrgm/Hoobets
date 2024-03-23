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

@app.route('/home') 
def home():
    return render_template("template.html", list=["hi", "hello"])

@app.route('/data')
def giveData():
    data = {
        "foo":"foo"
    }
    return jsonify(data)

@app.route('/bets')
def bets():
    data = [
        {
            "name":"Richmond",
            "likes":312,
            "description":"lorem lorem lorem lorem lorem"
        },
        {
            "name":"Roanoke",
            "likes":412,
            "description":"lorem lorem lorem lorem lorem"
        },
        {
            "name":"Seattle",
            "likes":532,
            "description":"lorem lorem lorem lorem lorem"
        },
        {
            "name":"Nova",
            "likes":-1234,
            "description":"lorem lorem lorem lorem lorem"
        }
    ]
    return data

if __name__ == "__main__":
    app.run(debug=True)
