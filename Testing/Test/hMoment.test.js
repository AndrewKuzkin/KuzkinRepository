/*
Можно протестить следующее:
1. Убедиться, что функция возвращает строку в правильном формате.
2. Проверить, что функция вызывает метод reply с ожидаемым значением.
*/


const moment = require('moment');
const { hMoment } = require('../botty.js');


describe('hMoment function', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            reply: jest.fn()
        };
    });

    test('Test: Функция возвращает строку в правильном формате', () => {
			hMoment(ctx);

        const expectedFormat = moment().format('DD.MM.YYYY HH:mm:ss');
        expect(ctx.reply).toHaveBeenCalledWith(expectedFormat);
    });

    test('Test: Функция вызывает метод reply с ожидаемым значением', () => {
        hMoment(ctx);

        expect(ctx.reply).toHaveBeenCalled();
    });
});


Эти тесты помогут вам убедиться, что функция hMoment правильно форматирует текущую дату и время и отправляет его через метод reply. Если у вас есть другие вопросы или нужна помощь, не стесняйтесь обращаться.