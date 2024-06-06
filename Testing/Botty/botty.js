const { Telegraf, session } = require('telegraf');
const fs = require('fs');
	const moment = require('moment');

// Чтение токена из файла
const botToken = fs.readFileSync('bot.token', 'utf8').trim();
 const bot = new Telegraf(botToken);
bot.use(session());

//Считываем массив авторизованных id
const authIDs = fs.readFileSync('auth.id', 'utf8').trim().split('\n');
const auth = authIDs.map(str => parseInt(str, 10));


//Обработчик авторизации
async function hAuth(ctx, next) {
    ctx.session = ctx.session || {}; // Инициализация объекта session, если он не существует
    if (ctx.session.state == 'Authorized') {
        return next();
    }
    
    if (auth.includes(ctx.from.id)) {
        ctx.session.state = 'Registred';
        ctx.session.registred= true;
        return next();
    } else {
        ctx.session.state = 'NotRegistred';
        ctx.session.registred= false;
        ctx.reply(ctx.from.first_name + ', Вы не зарегистрированы! Хотите зарегистрироваться? (Ответьте да или нет)');
        ctx.session.state = 'WaitRegistration';
    };
    return next();
};

//Слушатели Yes и No
bot.hears(/(yes|y)/i, hYes);
async function hYes(ctx)  {
if (ctx.session.state == 'WaitRegistration') {
    const authKey = Math.floor(1000 + Math.random() * 9000); // Генерация случайного 4-значного ключа
    auth.push(ctx.from.id); // Добавление id пользователя в массив auth
    auth.push(authKey.toString()); // Добавление ключа в массив auth
    fs.appendFileSync('auth.id', `${ctx.from.id}\n${authKey}\n`);
    ctx.reply('Регистрация успешно завершена. Ваш авторизационный ключ: ' + authKey);
    ctx.session.state = 'Registred';
    ctx.session.registred= true;
} else if (ctx.session.state == 'WaitAuthorization'){
    ctx.reply('Введите ваш ключ авторизации:')
}
};

//bot.hears(/(no|n)/i, hNo);
bot.hears('n');
async function hNo(ctx) {
    ctx.reply('Вы отказались от регистрации.');
    ctx.session.state = 'CancelRegistration';
};
//Авторизация middleware
bot.use(hAuth);


//Обработчик команды /start
function hStart(ctx) {
    if (!ctx.session.registred) {
        ctx.reply('Вы не зарегистрированы! Хотите зарегистрироваться?  (yes/no)');
        ctx.session.state = 'WaitRegistration';
        //return
    } else if (!ctx.session.authorized) {
        ctx.reply('Вы зарегистрированы, но не авторизованы! Хотите авторизоваться?  (yes/no)');
        ctx.session.state = 'WaitAuthorization';
        //return
    } else {
	    ctx.reply('Привет , ' +ctx.from.first_name + '! Я ' + ctx.botInfo.username + " Введи команду:");
    }
};

bot.start(hStart);

// Обработчик для команды /reg
function hReg(ctx) {
    if (ctx.session.registred) {
        ctx.reply('Вы уже зарегистрированы');
        return
    };

    const id = ctx.from.id;
    const fn = ctx.from.first_name;
    const un = ctx.from.username;
    ctx.reply('Запрос на регистрацию телеграм-пользователя ' + un + ' с именем ' + fn + ' и userid: ' + id + '/n Введите команду /start');
};

bot.command(/(reg|r)/i, hReg);
 
//Обработчик команды /i
function hRegInfo(ctx) {
    ctx.reply('registered=' + ctx.session.registred + ' authorized=' + ctx.session.authorized);
};
  
bot.command('i', hRegInfo);

//Обработчик команды /da
function hDeAuth(ctx) {
	ctx.session.authorized = false;
    ctx.reply('Вы деавторизованы!\n registered=' + ctx.session.registred + ' authorized=' + ctx.session.authorized);
};
  
bot.command('da', hDeAuth);


//Обработчик команды /moment
function hMoment(ctx) {
	ctx.reply(moment().format('DD.MM.YYYY HH:mm:ss'));
};
  
bot.command('moment', hMoment);

// Обработчик для команды /ui
		function hUserInfo(ctx) {
			const id = ctx.from.id;
			const fn = ctx.from.first_name;
			const un = ctx.from.username;
			ctx.reply('Информация о пользователе :' + '\nтелеграм-пользователь:' +un + ' с именем ' + fn + ' и userid: ' + id );
		};

		bot.command('ui', hUserInfo);
		 
// Обработчик для команды /bi
function hBotInfo(ctx) {
    bot.telegram.getMe().then((botInfo) => {
        const botName = botInfo.username;
        ctx.reply('Имя этого бота: ' + botName);
    }).catch((error) => {
        ctx.reply('Ошибка при получении информации о боте:', error);
    });
};

bot.command('bi', hBotInfo);
 

bot.command(/(pin)/i, (ctx) => {
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

// Обработчик для команды /id
function hMyId(ctx) {
    const userId  = ctx.from.id; // или ctx.message.from.id;
    ctx.reply('Ваш ID: ' + userId);
};

bot.command(/(id)/i, hMyId);

// Обработчик для команды /help/h
function hHelp(ctx) {
const helpStr = '-Начало работы. Регистрация и авторизация(если нужно)\n/start\n'+
'-На вопросы типа Yes/No можно отвечать полным словом или кратко(yes, no, y, n). Ввод не чувствителен к регистру\n'+
'- Информация о регистрации и авторизации\n/i\n'+
'- Показать идентификатор пользователя, с которым он зарегистрирован в телеграм\n/id\n'+
'-Полная информация о пользователе\n/ui\n'+
'- Информация о боте\n/bi\n'+
'- Деавторизация\n/da\n'+
'- Красиво выводит текущий момент при помощи библиотеки moment.js\n/moment\n'+
'- Эта справка\n/help или /h';
    ctx.reply(helpStr);
};

bot.    command(/(h|help)/i, hHelp);

bot.on('text', hText);
async function hText(ctx)  {
    if (ctx.session.authorized) {
        ctx.reply('Неверная команда:' + ctx.message.text);
        return
    };
        
    const pos= auth.indexOf(ctx.from.id);
    if (pos!==-1) {
        const authNumber = auth[pos+1];
        if (authNumber  == parseInt(ctx.message.text)) {
            ctx.reply('Вы успешно авторизованы на один сеанс!');
            ctx.session.state = 'Authorized';
            ctx.session.authorized= true
        } else {
            ctx.session.state = 'NotAuthorized';
            ctx.session.authorized== false
            ctx.reply('Вы не авторизованы! Проверьте ключ.');
        }
    } else {
        ctx.reply('Вы не зарегистрированы!');
    }
};  

//bot.launch();
// Проверяем на режим тестирования и запускаем бота
if (process.env.NODE_ENV !== 'test') {
    bot.launch();
};

//module.exports = bot;

module.exports = {
	bot: bot,
    hAuth: hAuth,
    hStart: hStart,
	hYes: hYes,
	hNo: hNo,
	hRegInfo: hRegInfo,
	hDeAuth: hDeAuth,
	hMoment: hMoment,
	hUserInfo: hUserInfo,
	hBotInfo: hBotInfo,
	hMyId: hMyId,
	hHelp: hHelp,
	hText: hText
};
