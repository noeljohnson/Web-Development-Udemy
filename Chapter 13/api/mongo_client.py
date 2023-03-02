## GTG

import os
import pymongo
import dotenv

dotenv.load_dotenv("./.env.local")

conn_info = {
  "host": os.environ.get("MONGO_URL", "mongo"),
  "username": os.environ.get("MONGO_USERNAME", "root"),
  "password": os.environ.get("MONGO_PASSWORD", ""),
  "port": os.environ.get("MONGO_PORT", 27017),
}


mongo_client = pymongo.MongoClient(
  **conn_info
)

def insert_test_document():

  """
    tests if the mongo db connections are successfull
  """

  db = mongo_client.test
  test_collection = db.test_collection
  res = test_collection.insert_one({
    "name": "Jacob",
    "age" : 26,
  })

  print(res)
## TYJC
