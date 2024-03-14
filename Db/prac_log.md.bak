### Кое-что и логи
##1. Создание БД kuzkindb
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    secondname VARCHAR(50),
    email VARCHAR(100)
);

##2. Вставил в БД несколько строк
Сначала прописал себя:
INSERT INTO users (email, firstname, secondname) VALUES ('kuzkin@mail.ru', 'Andrew', 'Kuzkin');

Затем 3 раза прописал Васю Иванова:
INSERT INTO users (email, firstname, secondname) VALUES ('ivanov@mail.ru', 'Vasya', 'Ivanov');

Получилось такое наполнени:
 id | firstname | secondname |     email      
----+-----------+------------+----------------
  1 | Andrew    | Kuzkin     | kuzkin@mail.ru
  2 | Vasya     | Ivanov     | ivanov@mail.ru
  3 | Vasya     | Ivanov     | ivanov@mail.ru
  4 | Vasya     | Ivanov     | ivanov@mail.ru
  5 | Vasya     | Ivanov     | ivanov@mail.ru
(5 строк)

##3. Затем мне не понравилось имя поля с именем user_id, , которое было выбрано для хранения первичного ключа, и  я его переименовал в просто id.

ALTER TABLE users RENAME COLUMN user_id TO id;


Все получилось.

##4. Потом попробовал удалить лишние записи.

delete from users where  id>2;

Получилась такая табличка:
 id | firstname | secondname |     email      
----+-----------+------------+----------------
  1 | Andrew    | Kuzkin     | kuzkin@mail.ru
  2 | Vasya     | Ivanov     | ivanov@mail.ru
(2 строки)

##5 Далее попробовал заменить Васю Иванова на Сашу Даниленка:

UPDATE users
SET firstname = 'Alexander', secondname = 'Danilenok'
WHERE id=2;

Даем select * from users; и получаем такую табличку:
 id | firstname | secondname |     email      
----+-----------+------------+----------------
  1 | Andrew    | Kuzkin     | kuzkin@mail.ru
  2 | Alexander | Danilenok  | ivanov@mail.ru
(2 строки)

##6/ Пробую выборать себя по id=1 и получаю:
 id | firstname | secondname |     email      
----+-----------+------------+----------------
  1 | Andrew    | Kuzkin     | kuzkin@mail.ru
(1 строка


В целом, все   норм.