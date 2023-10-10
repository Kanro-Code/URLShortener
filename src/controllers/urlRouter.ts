import express from 'express';
import * as urlModel from '../models/urlModel';

const urlRouter = express.Router();

urlRouter.get('/', (_req, res) => {
	res.send('API Endpoint for URLs');
});

urlRouter.put('/', async (req, res) => {
	console.log(req.body);
	const url = await urlModel.create('https://www.google.com');
	res.json(url);
});

export default urlRouter;
