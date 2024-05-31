from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def process_text():
    text = request.form['text']
    return text

if __name__ == '__main__':
    app.run(debug=True)

