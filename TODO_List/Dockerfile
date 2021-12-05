FROM python:3.8.6

RUN pip3 install -U pip
COPY ./ ./
RUN pip3 install -r requirements.txt
RUN pip3 install gunicorn