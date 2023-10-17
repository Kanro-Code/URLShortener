import express from 'express';

const app = express();

app.use(express.json());

app.get('/hello', (_, res) => {
	res.send('Hello Vite + React + TypeSacript!');
});

export default app;
