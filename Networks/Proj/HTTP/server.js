const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Вы ввели следующий текст:</h1><p>${body}</p>');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Страница не найдена');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('Сервер запущен на порту ${PORT}');
});

