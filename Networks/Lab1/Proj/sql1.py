import subprocess

def run_sqlmap(url):
    command = f"sqlmap -u {url} --batch --stream"
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

    for line in process.stdout:
        #print(line, end='')

        if 'select' in line.lower():  # Проверяем наличие ключевого слова "sql" в строке (регистронезависимо)
            print("Предупреждение: Обнаружено ключевое слово 'sql'!")

    process.wait()

# Пример использования функции
website_url = "http://127.0.0.1:8080/"
run_sqlmap(website_url)

