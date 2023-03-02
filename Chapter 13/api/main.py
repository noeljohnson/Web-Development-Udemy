## GTG

import flask
import requests
import os
import dotenv
import flask_cors
import mongo_client

dotenv.load_dotenv("./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY")
DEBUG = int(os.environ.get("DEBUG"))

if not UNSPLASH_KEY:
  raise EnvironmentError("Please create .env.local file containing the UNSPLASH_KEY field")

IGDB = mongo_client.mongo_client.gallery
IGIC = IGDB.images

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

@app.route("/images", methods=["GET", "POST"])
def images():
  if (flask.request.method == "GET"):
    all_imgs_json_list = [img_json for img_json in IGIC.find({})]
    return (flask.jsonify(all_imgs_json_list))

  elif (flask.request.method == "POST"):
    img_json = flask.request.get_json()
    img_json["_id"] = img_json.get("id", "")
    res = IGIC.insert_one(img_json)
    return ({"inserted_id": res.inserted_id})

@app.route("/images/<image_id>", methods=["DELETE"])
def del_img_json(image_id):
  res = IGIC.delete_one({"_id": image_id})
  if (res.deleted_count == 1):
    return ({"deleted_id": image_id})
  else:
    return ({"deleted_id": "NA"})
if (__name__ == "__main__"):
  app.run(host="0.0.0.0", port=5000)

## TYJC
