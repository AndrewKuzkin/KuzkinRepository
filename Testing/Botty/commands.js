//commands.js
const { Telegraf } = require('telegraf');
const { fs } = require('fs');

// Обработчик для команды /reg
function handleRegistration(ctx) {
    const id = ctx.from.id;
    const fn = ctx.from.first_name;
    const un = ctx.from.username;
    ctx.reply('Запрос на регистрацию телеграм-пользователя ' + un + ' с именем ' + fn + ' и userid: ' + id + '/n Введите команду \pin');
}

// Обработчик для команды /pin
function handlePinCode(ctx) {
    const pinCode = ctx.message.text.trim().slice(-4);
    if (pinCode.length !== 4 || isNaN(pinCode)) {
        ctx.reply('Пин-код должен состоять из 4 цифр. Попробуйте еще раз.');
    } else {
        const authData = toString(id) + pinCode;
        fs.appendFile('auth.id', authData, (err) => {
            if (err) {
                console.error(err);
                ctx.reply('Произошла ошибка при записи данных. Попробуйте позже.');
            } else {
                ctx.reply('вы успешно зарегистрированы. Запомните свой PIN: ', pinCode);
            }
        });
    }
}

// Обработчик для команды /myid /id
function handleUserId(ctx) {
    const userId = ctx.from.id;
    ctx.reply('Ваш ID: ' + userId);
}

// Обработчик для команды /help/h
function handleHelp(ctx) {
    const helpStr = 'Справка';
    ctx.reply(helpStr);
};

module.exports = {
    handleRegistration,
    handlePinCode,
    handleUserId,
    handleHelp,
};
