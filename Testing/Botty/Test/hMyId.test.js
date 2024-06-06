const { hMyId } = require('../botty.js'); // Импортируем функцию hMyId из модуля

describe('hMyId', function() {
    it('should reply with user ID', function() {
        // Создаем mock объект ctx с нужными свойствами
        const ctx = {
            from: {
                id: 123 // Устанавливаем ID пользователя для теста
            },
            reply: jest.fn() // Mock функции reply
        };

        // Вызываем функцию hMyId с mock объектом ctx
        hMyId(ctx);

        // Ожидаемая строка с сообщением, содержащим ID пользователя
        const expectedReply = 'Ваш ID: 123'; // Замените 123 на ожидаемый ID пользователя

        // Проверяем, что функция reply была вызвана с правильным сообщением
        expect(ctx.reply).toHaveBeenCalledWith(expectedReply);
    });
});
/*

В этом тесте мы импортируем функцию hMyId из модуля и создаем mock объект ctx с необходимыми свойствами, включая from.id. Затем мы вызываем функцию hMyId с mock объектом ctx и проверяем, что функция reply была вызвана с правильным сообщением, содержащим ID пользователя.
*/