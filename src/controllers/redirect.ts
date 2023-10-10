import express from 'express';

const redirectRouter = express.Router();

redirectRouter.get('/', (req, res) => {
	res.send('Hello World!');
});

export default redirectRouter;
