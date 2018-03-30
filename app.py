#!/usr/bin/env python

from flask import Flask, render_template

from config.base import DEBUG, SECRET_KEY


app = Flask(__name__)
app.secret_key = SECRET_KEY


@app.route('/')
def homepage():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=DEBUG, use_reloader=True)
