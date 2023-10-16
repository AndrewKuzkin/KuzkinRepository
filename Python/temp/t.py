import random
print("Сортировка двоичным делением")
# Создаем пустой  массив x
x = []
# Заполняем его k случайными числами от m до n
k = 30
m = 5
n = 125
for i in range(k):
	x.append(random.randint(m, n))
x = sorted(x)
print("Длина массива: ", len(x))
print(x)

# Устраняем  неуникальные элементы
s= set(x)
print("Длина массивас уникальными элементами: ", len(s))
print(s)
input()