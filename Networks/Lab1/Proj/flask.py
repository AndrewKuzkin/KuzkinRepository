from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Привет, мир!'

if __name__ == '__main__':
    app.run(host='localhost', port=8080)


