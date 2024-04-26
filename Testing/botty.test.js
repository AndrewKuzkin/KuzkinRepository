const { Telegraf } = require('telegraf');
const fs = require('fs');

// Импортируем функцию hAuth из вашего файла
const { hAuth } = require('./botty.js');

// Мокаем функцию отправки сообщения
const replyMock = jest.fn();

// Создаем объект контекста для теста
const ctx = {
    from: {
        id: 6089839456,
        first_name: 'Андрей'
    },
    session: {},
    reply: replyMock,
};

// Мокаем функцию next
const nextMock = jest.fn();

// Тест для функции hAuth
test('Test1: Просит об авторизации, если пользователь не авторизован', () => {
    // ctx.from.id не содержится в списке авторизованных пользователей
	const auth = [6089839456, 6089839458]; 
    hAuth(ctx, nextMock);

		expect(ctx.session.state).toBe('notAuthorized');
    expect(replyMock).toHaveBeenCalledWith('Товарищ Андрей, Вы не зарегистрированы! Для регистрации введите команду : /reg');
    expect(nextMock).toHaveBeenCalled();
});
