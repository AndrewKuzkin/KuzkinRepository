/*Функция hRegInfo(ctx) представляет собой обработчик команды /i, который отправляет сообщение с информацией о состоянии регистрации и авторизации пользователя.

Тестируем  следующие сценарии:
1. Пользователь не зарегистрирован и не авторизован.
2. Пользователь зарегистрирован, но не авторизован.
3. Пользователь зарегистрирован и авторизован.
*/

const { hRegInfo } = require('../botty.js');
const { Telegraf } = require('telegraf');
const fs = require('fs');




describe('hRegInfo function', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            reply: jest.fn(),
            session: {}
        };
    });

    test('Test: Пользователь не зарегистрирован и не авторизован', () => {
        hRegInfo(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('registered=false authorized=false');
    });

    test('Test: Пользователь зарегистрирован, но не авторизован', () => {
        ctx.session.registred = true;
        hRegInfo(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('registered=true authorized=false');
    });

    test('Test: Пользователь зарегистрирован и авторизован', () => {
        ctx.session.registred = true;
        ctx.session.authorized = true;
        hRegInfo(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('registered=true authorized=true');
    });
});


Эти тесты помогут вам убедиться, что функция hRegInfo корректно формирует сообщения с информацией о состоянии регистрации и авторизации пользователя в различных сценариях. Если у вас есть дополнительные вопросы или нужна помощь, пожалуйста, дайте знать.