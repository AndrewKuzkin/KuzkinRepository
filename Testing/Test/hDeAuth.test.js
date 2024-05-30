/*
Функция hDeAuth(ctx) представляет собой обработчик команды /da, который снимает авторизацию пользователя, устанавливая значение ctx.session.authorized в false, и отправляет сообщение о деавторизации пользователя вместе с информацией о состоянии регистрации и авторизации.

Тестируем  следующие сценарии:
1. Пользователь был авторизован и теперь деавторизован.
2. Пользователь не был авторизован изначально.

Пример тестов для этой функции:

*/
const { hDeAuth } = require('../botty.js');

describe('hDeAuth function', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            reply: jest.fn(),
            session: {}
        };
    });

    test('Test: Пользователь был авторизован и теперь деавторизован', () => {
        ctx.session.registred = true;
        ctx.session.authorized = true;

        hDeAuth(ctx);

        expect(ctx.session.authorized).toBe(false);
        expect(ctx.reply).toHaveBeenCalledWith('Вы деавторизованы!\n registered=true authorized=false');
    });

    test('Test: Пользователь не был авторизован изначально', () => {
        ctx.session.registred = true;

        hDeAuth(ctx);

        expect(ctx.session.authorized).toBe(false);
        expect(ctx.reply).toHaveBeenCalledWith('Вы деавторизованы!\n registered=true authorized=false');
    });
});


Эти тесты помогут вам убедиться, что функция hDeAuth корректно изменяет статус авторизации пользователя и отправляет правильное сообщение о деавторизации. Если у вас есть ещё вопросы или нужна помощь, не стесняйтесь спрашивать.