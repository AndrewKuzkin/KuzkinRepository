import logging
from flask import Flask, request, render_template

app = Flask(__name__)

# Настройка логгирования
logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Функция для проверки на SQL-инъекции
def check_sql_injection(input_string):
    if "select" in input_string:
        return True
    return False

# Функция для проверки на JS-инъекции
def check_js_injection(input_string):
    if "script" in input_string:
        return True
    return False

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_input = request.form['user_input']
        
        # Получение информации о браузере и операционной системе из заголовков запроса
        user_agent = request.user_agent
        browser = user_agent.browser
        os = user_agent.platform
        
        # Проверка на SQL-инъекции
        if check_sql_injection(user_input):
            # Запись в лог при обнаружении SQL-инъекции
            logging.info(f"SQL Injection detected - IP: {request.remote_addr}, Browser: {browser}, OS: {os}, Input: {user_input}")
            return render_template('sql_injection.html', user_input=user_input, ip_address=request.remote_addr)
        
        # Проверка на JS-инъекции
        if check_js_injection(user_input):
            # Запись в лог при обнаружении JS-инъекции
            logging.info(f"JS Injection detected - IP: {request.remote_addr}, Browser: {browser}, OS: {os}, Input: {user_input}")
            return render_template('js_injection.html', user_input=user_input, ip_address=request.remote_addr)
        
        # Если инъекций не обнаружено, продолжаем обработку формы
        return render_template('result.html', user_input=user_input)
    
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)


