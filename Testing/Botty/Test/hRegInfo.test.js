const { hRegInfo } = require('../botty.js');
const { Telegraf } = require('telegraf');

describe('hRegInfo', function() {
    it('Сообщает информацию по регистрации и авторизации в ответ на получение команды /i', function() {
        // Создаем mock объект ctx
        const ctx = {
            session: {
                authorized: true,
                registred: true
            },
            reply: jest.fn() // Mock функции reply
        };

        // Вызываем функцию hRegInfo с mock объектом ctx
        hRegInfo(ctx);

        // Проверяем, что функция reply была вызвана с правильным сообщением
        expect(ctx.reply).toHaveBeenCalledWith('registered=true authorized=true');
    });
});

/*
В этом тесте мы импортируем функцию hRegInfo из модуля и создаем mock объект ctx с нужными свойствами. Затем вызываем функцию hRegInfo с этим mock объектом и проверяем, что функция reply была вызвана с правильным сообщением о состоянии регистрации и авторизации.
*/