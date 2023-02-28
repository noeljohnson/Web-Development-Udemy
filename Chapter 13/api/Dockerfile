FROM python:alpine

EXPOSE 5000

WORKDIR /app/api

COPY requirements.txt main.py .env.local ./

RUN pip install -r requirements.txt

CMD ["python", "main.py"]
