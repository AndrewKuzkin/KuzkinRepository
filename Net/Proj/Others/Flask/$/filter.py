from flask import Flask, request, render_template

app = Flask(__name__)

# Функция для проверки на SQL-инъекции
def check_sql_injection(input_string):
    # Здесь должен быть ваш код для проверки на SQL-инъекции
    # В данном примере просто возвращаем True, если найдена инъекция
    if "select" in input_string:
        return True
    return False

# Функция для проверки на JS-инъекции
def check_js_injection(input_string):
    # Здесь должен быть ваш код для проверки на JS-инъекции
    # В данном примере просто возвращаем True, если найдена инъекция
    if "script" in input_string:
        return True
    return False

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_input = request.form['user_input']
        
        # Проверка на SQL-инъекции
        if check_sql_injection(user_input):
            # Действия при обнаружении SQL-инъекции
            # Например, запись в лог и возврат страницы с информацией об угрозе
            return render_template('sql_injection.html', user_input=user_input, ip_address=request.remote_addr)
        
        # Проверка на JS-инъекции
        if check_js_injection(user_input):
            # Действия при обнаружении JS-инъекции
            # Например, запись в лог и возврат страницы с информацией об угрозе
            return render_template('js_injection.html', user_input=user_input, ip_address=request.remote_addr)
        
        # Если инъекций не обнаружено, продолжаем обработку формы
        return render_template('result.html', user_input=user_input)
    
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)

'''
Ффункции check_sql_injection и check_js_injection проверяют ввод на SQL- и JS-инъекции. При обнаружении инъекций возвращается соответствующая страница с информацией об угрозе и IP-адресом источника.
HTML-шаблоны sql_injection.html, js_injection.html, result.html и form.html для отображения информации на страницах.
'''