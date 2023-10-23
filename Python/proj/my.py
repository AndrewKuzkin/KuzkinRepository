# В этом разделе импортируем из библиотеки Selenium обЪекты, которые могут нам пригодиться
from selenium.webdriver.common.by import By 
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.keys import Keys
import time
 
browser = webdriver.Firefox() # Get local session of firefox
browser.get("http://gaugn.cemi.rssi.ru/") # загружает сайт
title= browser.title
print(title)

src= browser.page_source
#print(src)

pos1 = 1
pos2 = 2
len = len(src)
#breakpoint()
while pos1 > 0:
	pos1 = src.find("Mp3\\", pos1, len)
	pos2 = src.find(".mp3", pos1 +4, len) 
	if pos1 > 0:
		s = src[pos1+4:pos2]
		print(s)	 
		pos1 = pos2 +4