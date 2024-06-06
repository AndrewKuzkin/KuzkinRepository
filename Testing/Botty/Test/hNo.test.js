const { hNo } = require('../botty.js');

describe('hNo function', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            reply: jest.fn(),
            session: {
                state: 'WaitRegistration'
            }
        };
    });

    test('Test: Отказ от регистрации', () => {
        hNo(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Вы отказались от регистрации.');
        expect(ctx.session.state).toBe('CancelRegistration');
    });
});

