const { Telegraf } = require('telegraf');

//Здесь для наглядности оставим текст функции, потом можно удалить и импортировать
function hReg(ctx) {
    if (ctx.session.registred) {
        ctx.reply('Вы уже зарегистрированы');
        return
    };

    const id = ctx.from.id;
    const fn = ctx.from.first_name;
    const un = ctx.from.username;
    ctx.reply('Запрос на регистрацию телеграм-пользователя ' + un + ' с именем ' + fn + ' и userid: ' + id + '\nВведите команду /start');
};

//const bot = new Telegraf('asdf:1234');
//bot.command(/(reg|r)/i, hReg);

test('Команда регистрации корректна', () => {
    const ctx = {
        session: { registred: false },
        from: { id: 9876543210, first_name: 'Вася', username: 'vasya@mail.ru' },
        reply: jest.fn()
    };

    hReg(ctx);

    expect(ctx.reply).toHaveBeenCalledWith('Запрос на регистрацию телеграм-пользователя vasya@mail.ru с именем Вася и userid: 9876543210\nВведите команду /start');
});

test('Already registered user receives appropriate message', () => {
    const ctx = {
        session: { registred: true },
        reply: jest.fn()
    };

    hReg(ctx);

    expect(ctx.reply).toHaveBeenCalledWith('Вы уже зарегистрированы');
});


/*
Здесь создается  два теста для функции hReg: один для проверки отправки сообщения о запросе на регистрацию пользователя, а другой для проверки сообщения, отправляемого зарегистрированным пользователям. 
Используется Jest mock-функцию для проверки вызова reply с правильными параметрами. 
*/