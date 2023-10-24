# Зададим параметры списка чисел
k = 10 #Размерность списка случайных чисел
m=50 # Начальное значение диапазона 
n=100 #Конечное значение диапазона

#Зададим этот список случайных чисел и отсортируем его
import random
numList = random.sample(range(m, n), k)
numList.sort()

print("Вот такой получился массив чисел:")
print(numList)

# Функция ищет число num в глобальном списке numList и выдает индекс этого числа
def BSearch(num):
    left = 0
    right = len(numList)
    while left < right:
        mid = left + (right - left) // 2
        if num == numList[mid]:
            return mid
        elif num > numList[mid]:
            left = mid + 1
        else:
            right = mid - 1
    return -1

print('Введите число от ', m, ' до ', n, ' и мы попытаемся его найти в случайном массиве:')
j = int(input())
i = BSearch(j)
if i >= 0:
	print("Индекс числа ", j, "в нашем массиве  равен  ", i)
else:
	print("Число ", j, "не найдено в нашем массиве.")