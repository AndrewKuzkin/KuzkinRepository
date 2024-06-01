import subprocess

# Функция для запуска sqlmap
def run_sqlmap(url):
    command = f"sqlmap -u {url} --batch --stream"
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    while True:
        output = process.stdout.readline()
        if output == b'' and process.poll() is not None:
            break
        if output:
            print(output.strip())

url = "http://127.0.0.1:8080"
#url = "https://gaugn.cemi.rssi.ru"

run_sqlmap(url)

