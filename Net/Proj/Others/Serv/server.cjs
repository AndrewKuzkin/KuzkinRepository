const serve = require('serve');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

// Путь к папке, из которой будут обслуживаться статические файлы
const server = serve('__Static', {
    port: 3000 // Порт, на котором будет запущен сервер
});

console.log('Сервер запущен на порту 3000');

app.post('/submit', (req, res) => {
    const textInput = req.body.textInput;
    console.log('Получен текст из формы:', textInput);
    
    res.json({ text: textInput });
});

app.listen(3000);

/*
В данном примере, при отправке формы на странице index.html, данные из поля ввода передаются на сервер по адресу /submit. Сервер принимает данные, выводит их в консоль и отправляет обратно клиенту для отображения.

Убедитесь, что у вас установлены зависимости serve, express и body-parser (если используете его). Для установки зависимостей можно использовать npm:
npm install serve express body-parser


После этого вы можете запустить серверный скрипт server.js с помощью Node.js:
node server.js


После запуска сервера, откройте страницу index.html в браузере и попробуйте отправить форму. Вы увидите, как текст из поля ввода будет отображаться на экране после отправки формы.
*/