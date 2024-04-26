const { Telegraf, session } = require('telegraf');
const fs = require('fs');
//const commands = require('./commands');

//Обработчики  команд
function hReg(ctx) {
    const id = ctx.from.id;
    const fn = ctx.from.first_name;
    const un = ctx.from.username;
    ctx.reply('Запрос на регистрацию телеграм-пользователя ' + un + ' с именем ' + fn + ' и userid: ' + id + '/n Введите команду \pin');
};

// Чтение токена из файла
const botToken = fs.readFileSync('bot.token', 'utf8').trim();
 const bot = new Telegraf(botToken);
bot.use(session());

//Считываем массив авторизованных id
const authIDs = fs.readFileSync('auth.id', 'utf8').trim().split('\n');
const auth = authIDs.map(str => parseInt(str, 10));


//Обработчик авторизации
function hAuth(ctx, next) {
	ctx.    session = ctx.session || {}; // Инициализация объекта session, если он не существует
    if (auth.includes(ctx.from.id)) {
		ctx.session.state = 'Authorized';
        return next();
    } else {
		ctx.session.state = 'notAuthorized';
        ctx.reply('Товарищ ' + ctx.from.first_name + ', Вы не зарегистрированы! Для регистрации введите команду : /reg');
	return next();
	}
};

//Авторизация
bot.use(hAuth);

//Обработчик команды /start
function hStart(ctx) {
	ctx.reply('Привет , ' +ctx.from.first_name + '! Я ' + ctx.botInfo.username);
};
	
bot.start(hStart);

// Обработчик для команды /reg
bot.command(/(reg|r)/i, hReg);
 
  bot.command(/(pin|p)/i, (ctx) => {
    const pinCode = ctx.message.text.trim().slice(-4);
        if (pinCode.length !== 4 || isNaN(pinCode)) {
            ctx.reply('Пин-код должен состоять из 4 цифр. Попробуйте еще раз.');
        } else {
                    const authData = toString(id)+pinCode;
                    fs.appendFile('auth.id', authData, (err) => {
                if (err) {
                    console.error(err);
                    ctx.reply('Произошла ошибка при записи данных. Попробуйте позже.');
                } else {
                    ctx.reply('вВы успешно зарегистрированы. Запомните свой PIN: ', pinCode);
                    }
            });
        }
    });

// Обработчик для команды /myid /id
bot.command(/(id|myid)/i, (ctx) => {
    const userId  = ctx.from.id; // или ctx.message.from.id;
    ctx.reply('Ваш ID: ' + userId);
});

// Обработчик для команды /help/h
bot.    command(/(h|help)/i, (ctx) => {
    const helpStr= 'Справка';
    ctx.reply(helpStr);
});

bot.on('text', (ctx) => ctx.reply('Нераспознанная команда: ' + ctx.message.text)) ;

//bot.launch();

//module.exports = bot;

module.exports = {
    hAuth: hAuth,
    hStart: hStart
};
