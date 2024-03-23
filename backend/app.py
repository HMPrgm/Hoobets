from flask import Flask, jsonify, render_template

def create_app():
    app = Flask(__name__)
    app.static_url_path="../frontend/public/templates"
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

@app.route('/articles')
def articles():
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
