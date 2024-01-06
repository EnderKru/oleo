// server.mjs
import express from 'express';

const app = express();

// Обработчик маршрута для корневого URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Порт, на котором будет работать сервер
const port = 3001;

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
