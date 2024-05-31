from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    # Функция request будет вызываться для каждого запроса к серверу
    if flow.request.pretty_url.startswith("https://localhost:8080/goals.htm"):
        # Проверяем, что URL запроса соответствует  условию
        if "sql" in flow.request.text:
            # Проверяем текст запроса на наличие ключевого слова "sql"
            print("Potential SQL injection detected in request:")
            print(flow.request.text)

"""
Код будет вызывать функцию request для каждого запроса к серверу, проверять URL запроса и текст запроса на наличие ключевого слова "sql" и выводить сообщение о потенциальном обнаружении инъекции SQL.

Нужно, чтобы  был установлен Mitmproxy и  скрипт должен запускаться вместе с Mitmproxy, как параметр этой утилиты  для перехвата и анализа сетевого трафика. 
Официальный сайт: Mitmproxy: https://docs.mitmproxy.org/stable/.
"""