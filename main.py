from flask import Flask

from controller import controller

app = Flask(__name__)

app.debug = True
app.register_blueprint(controller)

if __name__ == "__main__":
    app.run(port=8000)
