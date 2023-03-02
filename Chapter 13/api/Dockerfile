FROM python:alpine

EXPOSE 5000

WORKDIR /app/api

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY main.py mongo_client.py .env.local ./

CMD ["python", "main.py"]
