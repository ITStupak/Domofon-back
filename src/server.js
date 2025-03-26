import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import router from './routers/index.js'; // Імпортуємо роутер
import { getEnvVar } from './utils/getEnvVar.js'; // Імпортуємо функцію, яка перевіряє наявність змінної оточення
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
    const app = express();

    app.use(express.json());
    app.use(cors()); //Пакет CORS (Cross-Origin Resource Sharing) як Middleware
    app.use(cookieParser()); //Middleware для роботи із куками

    //Middleware для логування
    app.use(
        pino({
            transport: {
                target: 'pino-pretty',
            },
        }),
    );

    // Middleware для логування часу запиту
    app.use((req, res, next) => {
        console.log(`Time: ${new Date().toLocaleString()}`);
        next();
    });

    // Маршрут для обробки GET-запитів на '/'
    app.get('/', (req, res) => {
        res.json({
            message: 'Hello Serhii!',
        });
    });

    app.use(router); // Додаємо роутер до app як middleware

    app.use('*', notFoundHandler); //Middleware для обробки всіх не визначених роутів
    app.use(errorHandler); // Middleware для обробких помилок (приймає 4 аргументи)

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
