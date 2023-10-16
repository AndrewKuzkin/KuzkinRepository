import random
print("Сортировка двоичным делением")
m =5
n =125
k = 10

# Создаем пустое множество x
x = set()
if (n-m) > k:
	# Заполняем массив x к случайными, но уникальными числами
	for i in range(k):
		y = random.randint(m, n)
		x.append(y)
x = sorted(x)
print("Длина массива: ", len(x))
print(x)

# Устраняем  неуникальные элементы
s= set(x)
print("Длина массивас уникальными элементами: ", len(s))
print(s)
input()