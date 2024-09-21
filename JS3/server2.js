import { Server } from 'node:http';

const SHUTDOWN_DELAY = 5000; 

const server = new Server((req, res) => {
    res.end('Will be Disconnected after 5 seconds!');
});

// Запускаем сервер
server.listen(1234, () => {
    console.log('Сервер запущен по адресу http://localhost:1234');

    // Отключение сервера через 5 секунд
    setTimeout(() => {
        server.close(() => {
            console.log('Сервер остановлен.');
        });
    }, SHUTDOWN_DELAY);
});

