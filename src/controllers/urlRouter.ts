import express from 'express';

const urlRouter = express.Router();

urlRouter.get('/', (_req, res) => {
	res.send('Hello World!');
});

export default urlRouter;
