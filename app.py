from flask import Flask, render_template

# Configure application
app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")

@app.route("/trouble-shooter", methods=["GET"])
def trouble_shooter():
    return render_template("trouble-shooter.html")

@app.route("/sources", methods=["GET", "POST"])
def solutions():
    return render_template("sources.html")