import pandas as pd
import re
from collections import Counter

# Функция для извлечения информации из строки лога
def parse_log_line(line):
    # Регулярное выражение для извлечения IP, метода, URL, user-agent
    log_pattern = r'(?P<ip>\d+\.\d+\.\d+\.\d+) - - \[.*\] "(?P<method>\w+) (?P<url>.*?) .*" .* "(?P<user_agent>.*)"'
    match = re.match(log_pattern, line)
    if match:
        return match.group('ip'), match.group('method'), match.group('user_agent')
    return None

# Чтение файла
with open('output.log', 'r') as file:
    logs = file.readlines()

# Разбор логов
data = [parse_log_line(line) for line in logs if parse_log_line(line) is not None]
df = pd.DataFrame(data, columns=['IP', 'Method', 'User-Agent'])

# 1. Топ 10 IP адресов с которых идут запросы
top_ips = df['IP'].value_counts().head(10)
print("Топ 10 IP адресов:\n", top_ips)

# 2. Подсчет количества методов
method_counts = df['Method'].value_counts()
print("\nКоличество методов:\n", method_counts)

# 3. Количество операционных систем
os_counter = Counter()
os_pattern = r'\((.*?)\)'

for user_agent in df['User-Agent']:
    os_match = re.search(os_pattern, user_agent)
    if os_match:
        os_name = os_match.group(1).split(';')[0]  # Получаем основное название ОС
        os_counter[os_name] += 1

top_os = os_counter.most_common()
print("\nКоличество операционных систем:\n", sorted(top_os, key=lambda x: x[1], reverse=True))

# 4. Самое популярное устройство
device_counter = Counter()

for user_agent in df['User-Agent']:
    if 'Mobile' in user_agent:
        device_counter['Mobile'] += 1
    else:
        device_counter['Desktop'] += 1

popular_device = device_counter.most_common(1)
print("\nСамое популярное устройство:\n", popular_device)

# 5. Топ 5 популярных браузеров с версиями
browser_counter = Counter()

browser_pattern = r'(\w+)/(\d+\.\d+)'
for user_agent in df['User-Agent']:
    browser_match = re.search(browser_pattern, user_agent)
    if browser_match:
        browser_name_version = f"{browser_match.group(1)}/{browser_match.group(2)}"
        browser_counter[browser_name_version] += 1

top_browsers = browser_counter.most_common(5)
print("\nТоп 5 популярных браузеров:\n", top_browsers)

'''