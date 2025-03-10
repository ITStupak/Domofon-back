import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

const app = express();
const PORT = 3000;

//Middleware для логування
app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

//Пакет CORS (Cross-Origin Resource Sharing) як Middleware
app.use(cors());

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

//Middleware для обробки всіх не визначених роутів
app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

// Middleware для обробких помилок (приймає 4 аргументи)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
