# Программа транспонирует матрицу
print("Транспонирование матрицы")

print("Введите, пожалуйста, количество строк:")
n=int(input())
print("А теперь Введите количество столбцов:")
m=int(input())
print("Сейчас будет сгенерирована матрица размером ", n," на ", m)

     
import random

matrix1=[]
for i in range(n):
	row=[]
	for j in range(m):
		row.append(random.randint(1, 100))
	
	matrix1.append(row)
print(matrix1)


# Транспонирование матрицы
matrix2=[]
i=0
while(i<m):
	j=0
	row=[]
	while(j<n):
		row.append(matrix1[j][i])
		j=j+1

	matrix2.append(row)
	i=i+1

print("\nА это уже транспонированная матрица")
print(matrix2)

		