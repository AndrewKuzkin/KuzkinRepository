   # Реализация хеш-таблицы 

def checkPrime(n):
	if n == 1 or n == 0:
		return 0

	for i in range(2, n//2):
		if n % i == 0:
			return 0
	return 1

def getPrime(n):
	if n % 2 == 0:
		n = n - 1
	while not checkPrime(n):
		n =  n - 2
	return n

def getKey(data):
	strKey= ''
	for i in range(len(data) - 1):
			strKey=     strKey+ str(ord(data[i]))
	return int(strKey)

def hashFunction(key):
	capacity = getPrime(10)
	return key % capacity

def insertData(key, data):
	index = hashFunction(key)
	if hashTable[index] == []:
		hashTable[index] = [data]
	else:
		hashTable[index] .append(data)
		

def removeData(key, data):
	index = hashFunction(key)
	if len(hashTable[index]) != 0:
		hashTable[index].pop()

# Main

hashTable = [[]] * 10

while(True):
	dataRaw = input("Pleace, enter a, r, p, or q command:");
	if(dataRaw == "a"):
		value= input("Pleace enter string for insert into table")
		insertData(getKey(value), value)
	if(dataRaw == "r"):
		value= input("Pleace enter string for deleting from the table")
		removeData(getKey(value), value)
	if(dataRaw == "p"):
		print(hashTable)
	if(dataRaw == "q"):
		exit()

exit()

