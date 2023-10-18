import express from 'express';
import { parseUrl } from '../utils/urlHelper';

const urlRouter = express.Router();

urlRouter.get('/', (_req, res) => {
	res.status(200).json('Hello World!');
});

urlRouter.post('/', (req, res) => {
	const newUrl = parseUrl(req.body);
	console.log(req.body.original, req.body.slug);
	res.status(200).json(newUrl);
});

export default urlRouter;
