def add( tree, value):
# Дерево пустое
	if ( tree  == None):
		tree = {"parent" :None,  "left" : None, "right" : None, "value":value}
		return tree
	#Дерево не пустое
	temp = tree
	oldtemp = tree
	terminal = False
	while not terminal:
		if (value   < temp["value"]):
			if temp['left'] != None:
				oldtemp = temp
				temp = temp['left']
			else:
				temp['left'] = {"parent":oldtemp, "left" : None, "right" : None, "value":value}
				terminal = True
		elif (value   > temp["value"]):
			if temp['right'] != None:
				oldtemp = temp
				temp = temp['right']
			else:
				temp['right'] = {"parent":oldtemp, "left" : None, "right" : None, "value":value}
				terminal = True
	return tree

# Main

root = None

while(True):
	dataRaw = input("Pleace enter value");
	if(dataRaw == "a"):
		value = input("Pleace enter value for insert into tree");
		value = int(value);
		root = add(root, value);
	if(dataRaw == "p"):
		print(root)
	if(dataRaw == "q"):
		exit()
