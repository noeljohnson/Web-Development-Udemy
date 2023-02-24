FROM python:alpine

WORKDIR /app

RUN pip install pymongo

COPY ./py_files/mongo_connect.py .

CMD ["python", "mongo_connect.py"]
