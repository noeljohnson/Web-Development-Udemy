## GTG

import flask
import requests
import os
import dotenv
import flask_cors

dotenv.load_dotenv("./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY")
DEBUG = int(os.environ.get("DEBUG"))

if not UNSPLASH_KEY:
  raise EnvironmentError("Please create .env.local file containing the UNSPLASH_KEY field")

app = flask.Flask(__name__)
flask_cors.CORS(app)
app.config["DEBUG"] = bool(DEBUG)

@app.route("/")
def hello_world():
  return "Hello World"

@app.route("/new-image")
def new_image():
  word = flask.request.args.get("query")

  kwargs = {
    "url" : UNSPLASH_URL,

    "headers": {
      "Authorization": "Client-ID {}".format(UNSPLASH_KEY),
      "Accept-Version": "v1"
    },
  
    "params": {
      "query": word 
    }
  }

  unsplash_response  = requests.get(**kwargs)

  return (unsplash_response.json())

if (__name__ == "__main__"):
  app.run(host="0.0.0.0", port=5000)

## TYJC
