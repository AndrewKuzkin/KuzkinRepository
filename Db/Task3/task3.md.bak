### Посмотрим, какие у нас сохранились базы
test> show dbs                                                                                                          
admin     40.00 KiB                                                                                                     
config    60.00 KiB                                                                                                     
kuzkindb  72.00 KiB                                                                                                     
local     80.00 KiB                                                                                                     

### Подключаем  уже созданную базу KuzkinDb
test> use kuzkindb                                                                                                      
switched to db kuzkindb                                                                                                 
kuzkindb>                                                                                                               

###Добавим в документ поле login со значением Kuzmich:
kuzkindb> db.users.findOneAndUpdate({}, { $set: { login: "Kuzmich" } })                                                 
пусто
### Посмотрим, что получилось
kuzkindb> db.users.findOne()                                                                                            
{                                                                                                                       
  _id: ObjectId('65f9a9360c2800e019e84b06'),                                                                            
  name: 'Андрей',                                                                                                       
  key: 'val',                                                                                                           
  login: 'Kuzmich'                                                                                                      
}                                                                                                                       
### Добавим к коллекцие users еще один документ
kuzkindb> db.users.insertOne({ name: 'Шурик', login: '555'})                                                            
{                                                                                                                       
  acknowledged: true,                                                                                                   
  insertedId: ObjectId('65fa0d293326189271a047df')                                                                      
}                                                                                                                       

### Посмотрим, что получилось
kuzkindb> db.users.find()                                                                                               
[                                                                                                                       
  {                                                                                                                     
    _id: ObjectId('65f9a9360c2800e019e84b06'),                                                                          
    name: 'Андрей',                                                                                                     
    key: 'val',                                                                                                         
    login: 'Kuzmich'                                                                                                    
  },                                                                                                                    
  { _id: ObjectId('65f9ac040c2800e019e84b07'), name: 'Ivan' },                                                          
  {                                                                                                                     
    _id: ObjectId('65fa0d293326189271a047df'),                                                                          
    name: 'Шурик',                                                                                                      
    login: '555'                                                                                                        
  }                                                                                                                     
]                                                                                                                       

### Создадим новую коллекцию  messages  и добавим туда объект
kuzkindb> db.createCollection("messages")                                                                               
kuzkindb> db.messages.insertOne({login: 'Dmitry', msg: 'У меня теперь отличный пес!'}                                   
... )                                                                                                                   
{                                                                                                                       
  acknowledged: true,                                                                                                   
  insertedId: ObjectId('65fa90f8f7062e3d0fc5d225')                                                                      
}                                                                                                                       

kuzkindb> db.messages.findOne()                                                                                         
### Проверим что получилось
{                                                                                                                       
  _id: ObjectId('65fa90f8f7062e3d0fc5d225'),                                                                            
  login: 'Dmitry',                                                                                                      
  msg: 'У меня теперь отличный пес!'                                                                                    
}                                                                                                                       
### Попробуем теперь вставить несколько объектов при помощи метода insertMany
### А команду попробуем загрузить из заготовленного скрипта, который лежит в той же папке из которой мы запускали mongosh
load('insertMany.js')

# Вот этот скрипт:
db.messages.insertMany([
{login: 'Daniil', msg: 'Я разбирусь в Clickhouse.'},
{login: 'Данила', msg: 'Я люблю поднимать сервера по команде!'},
{login: 'Kuzmich', msg: 'Самые большие глупости на Земле делаются именно с этим выражением лица!'},
{login: 'Фетисов', msg: 'Скоро узнаем что такое Мигрант с нулевым кейдауном.'},
{login: '555', msg: 'Без linux нету счастья!'},{login: 'Даниил', msg: 'Привет от Даниила!'}])
### Мы тут ошиблись - не Фетисов, а Фитисов. Исправим:
db.messages.findOneAndUpdate({}, { $set: { login: "Фетисов" } })

###Окончательная таблица сообщений
  acknowledged: true,                                                                                                                                        
  insertedId: null,                                                                                                                                          
  matchedCount: 1,                                                                                                                                           
  modifiedCount: 1,                                                                                                                                          
  upsertedCount: 0                                                                                                                                           
}                                                                                                                                                            
kuzkindb> db.messages.find()                                                                                                                                 
[                                                                                                                                                            
  {                                                                                                                                                          
    _id: ObjectId('65fa90f8f7062e3d0fc5d225'),                                                                                                               
    login: 'Dmitry',                                                                                                                                         
    msg: 'У меня теперь отличный пес!'                                                                                                                       
  },                                                                                                                                                         
  {                                                                                                                                                          
    _id: ObjectId('65faa4a0d0840190190a17a1'),                                                                                                               
    login: 'Daniil',                                                                                                                                         
    msg: 'Я разбирусь в Clickhouse.'                                                                                                                         
Новое уведомление от Андрей Кузькин, Взаимодействие с БД, Данила: ​всем здравствуйте, сделал задания с пары по mongobd. через Unigram. . Ввод текста. Действия. 1 из 1  окно
  },                                                                                                                                                         
  {                                                                                                                                                          
    _id: ObjectId('65faa4a0d0840190190a17a2'),                                                                                                               
    login: 'Данила',                                                                                                                                         
    msg: 'Я люблю поднимать сервера по команде!'                                                                                                             
  },                                                                                                                                                         
  {                                                                                                                                                          
    _id: ObjectId('65faa4a0d0840190190a17a3'),                                                                                                               
    login: 'Kuzmich',                                                                                                                                        
    msg: 'Самые большие глупости на Земле делаются именно с этим выражением лица!'                                                                           
  },                                                                                                                                                         
  {                                                                                                                                                          
    _id: ObjectId('65faa4a0d0840190190a17a4'),                                                                                                               
    login: 'Фитисов',                                                                                                                                        
    msg: 'Скоро узнаем что такое Мигрант с нулевым кейдауном.'                                                                                               
Новое уведомление от Андрей Кузькин, Взаимодействие с БД, Evgeniy: ​Найс.. через Unigram. . Ввод текста. Действия. 1 из 1  окно
  },                                                                                                                                                         
  {                                                                                                                                                          
    _id: ObjectId('65faa4a0d0840190190a17a5'),                                                                                                               
    login: '555',                                                                                                                                            
    msg: 'Без linux нету счастья!'                                                                                                                           
  },                                                                                                                                                         
  {                                                                                                                                                          
    _id: ObjectId('65faa4a0d0840190190a17a6'),                                                                                                               
    login: 'Даниил',                                                                                                                                         
    msg: 'Привет от Даниила!'                                                                                                                                
  }                                                                                                                                                          
]                                                                                                                                                            


###  Теперь выполним само задание.
### Опять через вызов скрипта.
load('agregate.js')
### Текст скрипта:
db.users.aggregate([
  {
    $lookup: {
      from: "messages",
      localField: "login",
      foreignField: "login",
      as: "userMsg"
    }
  }
])


		### Теперь массив userMsg содержит то, что нужно
db.users.find({}, { userMsg });