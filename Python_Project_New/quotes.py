from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html', pesan="From Render Template, dan melewat kan (pass) variable kedalam halaman HTML and its work!")

@app.route('/about')
def about():
  return '<h1> Hello dok ! from about page</h1>'

@app.route('/quotes')
def quotes():
  return '<h1> Hidup adalah perjalanan</h1>'