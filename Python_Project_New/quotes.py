from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
  cars = ["Toyota", "Honda", "Mitsubishi"]
  return render_template('index.html', pesan="", cars=cars)

@app.route('/about')
def about():
  return '<h1> Hello dok ! from about page</h1>'

@app.route('/quotes')
def quotes():
  return '<h1> Hidup adalah perjalanan</h1>'