const { hMoment } = require('../botty.js'); // Импортируем функцию hMoment из модуля
const moment = require('moment'); // Импортируем библиотеку moment для работы с датами

describe('hMoment', function() {
    it('should reply with current date and time in the correct format', function() {
        // Создаем mock объект ctx
        const ctx = {
            reply: jest.fn() // Mock функции reply
        };

        // Сохраняем текущую дату и время в формате 'DD.MM.YYYY HH:mm:ss'
        const currentDateTime = moment().format('DD.MM.YYYY HH:mm:ss');

        // Вызываем функцию hMoment с mock объектом ctx
        hMoment(ctx);

        // Проверяем, что функция reply была вызвана с правильной текущей датой и временем
        expect(ctx.reply).toHaveBeenCalledWith(currentDateTime);
    });
});


