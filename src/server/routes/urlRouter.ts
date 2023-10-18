import express from 'express';

const urlRouter = express.Router();

urlRouter.get('/', (_req, res) => {
	res.status(200).json('Hello World!');
});

export default urlRouter;
