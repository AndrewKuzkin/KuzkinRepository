print("Задача  1")
m = int(input("Введите m:"))
n = int(input("А теперь введите n:"))

if m < n:
	for i in range(m, n+1):
			print(i)
else:
	print("Нужно, чтобы m было строго меньше n")

input()