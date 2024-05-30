/*
Функция hUserInfo(ctx) является обработчиком команды /ui, который отправляет информацию о пользователе в формате, который включает его Telegram username, имя и ID.

Тестируем:
1. Убедиться, что функция возвращает строку в правильном формате с правильными данными пользователя.
2. Проверить, что функция вызывает метод reply с ожидаемым значением.
*/


const { hUserInfo } = require('../botty.js');

describe('hUserInfo function', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            from: {
                id: 123456,
                first_name: 'John',
                username: 'john_doe'
            },
            reply: jest.fn()
        };
    });

    test('Test: Функция возвращает строку с правильными данными пользователя', () => {
        hUserInfo(ctx);

        const expectedResponse = 'Информация о пользователе :\nтелеграм-пользователь: john_doe с именем John и userid: 123456';
        expect(ctx.reply).toHaveBeenCalledWith(expectedResponse);
    });

    test('Test: Функция вызывает метод reply с ожидаемым значением', () => {
        hUserInfo(ctx);

        expect(ctx.reply).toHaveBeenCalled();
    });
});


Эти тесты помогут вам убедиться, что функция hUserInfo правильно формирует сообщение с информацией о пользователе и отправляет его через метод reply. Если у вас есть другие вопросы или нужна помощь, не стесняйтесь обращаться.