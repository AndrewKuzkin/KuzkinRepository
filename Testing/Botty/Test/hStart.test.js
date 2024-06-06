/*
Функция hStart(ctx) проверяет состояние пользователя и отправляет соответствующее сообщение. Если пользователь не зарегистрирован, ему предлагается зарегистрироваться. Если пользователь зарегистрирован, но не авторизован, ему предлагается авторизоваться. Если пользователь и зарегистрирован, и авторизован, ему отправляется приветственное сообщение.

Тестируем три различных сценария:
1. Пользователь не зарегистрирован.
2. Пользователь зарегистрирован, но не авторизован.
3. Пользователь зарегистрирован и авторизован.
*/

const { hStart } = require('../botty.js');

describe('функция hStart', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            reply: jest.fn(),
            session: {}
        };
    });

    test('Test: Пользователь не зарегистрирован', () => {
        hStart(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Вы не зарегистрированы! Хотите зарегистрироваться?  (yes/no)');
        expect(ctx.session.state).toBe('WaitRegistration');
    });

    test('Test: Пользователь зарегистрирован, но не авторизован', () => {
        ctx.session.registred = true;
        hStart(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Вы зарегистрированы, но не авторизованы! Хотите авторизоваться?  (yes/no)');
        expect(ctx.session.state).toBe('WaitAuthorization');
    });

    test('Test: Пользователь зарегистрирован и авторизован', () => {
        ctx.session.registred = true;
        ctx.session.authorized = true;
        ctx.from = { first_name: 'Имя пользователя' };
        ctx.botInfo = { username: 'Название бота' };
        hStart(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Привет, Имя пользователя! Я Название бота. Введи команду:');
    });
});
