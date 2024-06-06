const { Telegraf } = require('telegraf');
const { hDeAuth } = require('../botty.js');
describe('hDeAuth', function() {
    it('should deauthorize the user when /da command is received', function() {
        // Создаем mock объект ctx
        const ctx = {
            session: {
                authorized: true,
                registred: true
            },
            reply: jest.fn() // Mock функции reply
        };

        // Вызываем функцию hDeAuth с mock объектом ctx
        hDeAuth(ctx);

        // Проверяем, что авторизация была сброшена на false
        expect(ctx.session.authorized).toBe(false);

        // Проверяем, что функция reply была вызвана с правильным сообщением
        expect(ctx.reply).toHaveBeenCalledWith('Вы деавторизованы!\n registered=true authorized=false');
    });
});
/*
В этом тесте мы создаем mock объект ctx, который содержит значения authorized и registred. Мы вызываем функцию hDeAuth с этим mock объектом и затем проверяем, что авторизация была установлена в false и что функция reply была вызвана с правильным сообщением.

Этот тест поможет убедиться, что функция hDeAuth работает корректно при обработке команды /da.
*/