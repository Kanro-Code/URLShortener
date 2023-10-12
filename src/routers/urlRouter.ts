import express from 'express';
import urlModel from '../controllers/urlController';

const urlRouter = express.Router();

urlRouter.get('/:slug', async (req, res) => {
	const url = await urlModel.getBySlug(req.params.slug);
	if (!url) return res.status(404).send('Not found');

	return res.redirect(url.url);
});

urlRouter.put('/', async (req, res) => {
	const url = await urlModel.create(req.body.url, req.body.slug);
	return res.json(url);
});

export default urlRouter;
