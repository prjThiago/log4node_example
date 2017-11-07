'use strict';

const log4js = require('../lib/log4js');
// log the cheese logger messages to a file, and the console ones as well.

log4js.configure({
    appenders: {
        info: { type: 'file', filename: 'info.log', maxLogSize: 10485760, backups: 10 },

        console: { type: 'console' },
        email: {
            type: 'smtp',
            recipients: 'email@email.com',
            subject: 'Log Teste',
            transport: 'SMTP',
            SMTP: {
                host: 'smtp.gmail.com',
                secureConnection: true,
                port: 465,
                auth: {
                    user: 'sender@email.com',
                    pass: '************!'
                },
                debug: true                
            }
        }
    },
    categories: {
        info: { appenders: ['info'], level: 'all' },
        another: { appenders: ['console'], level: 'trace' },
        default: { appenders: ['console', 'cheeseLogs'], level: 'trace' },
        email: { appenders: ['email'], level: 'error' } 
    }
});