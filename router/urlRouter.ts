import express from 'express';

const urlRouter = express.Router();

urlRouter.get('/', (req, res) => {
	res.send('Hello World!');
});

export default urlRouter;
