//2 случая:  когда ctx.session.state равен 'WaitRegistration' и когда он равен 'WaitAuthorization'. 

const { hYes } = require('../botty.js');
const fs = require('fs');

describe('hYes function', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            from: {
                id: 6089839456,
                first_name: 'Андрей'
            },
            session: {
                state: 'WaitRegistration'
            },
            reply: jest.fn()
        };
        fs.appendFileSync = jest.fn(); // Mocking fs.appendFileSync
    });

    test('Test: Регистрация успешно завершена', () => {
        hYes(ctx);

        expect(ctx.session.state).toBe('Registred');
        expect(ctx.session.registred).toBe(true);
        expect(fs.appendFileSync).toHaveBeenCalled();
        expect(ctx.reply).toHaveBeenCalledWith(expect.stringContaining('Регистрация успешно завершена. Ваш авторизационный ключ:'));
    });

    test('Test: Ожидание ключа авторизации', () => {
        ctx.session.state = 'WaitAuthorization';
        
        hYes(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Введите ваш ключ авторизации:');
    });
});


