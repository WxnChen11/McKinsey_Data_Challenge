from flask import (
    Blueprint,
    render_template,
)

controller = Blueprint('controller', __name__)
@controller.route("/")
@controller.route("/<name>")
def home(name=""):
    return render_template('index.html', name=name)
