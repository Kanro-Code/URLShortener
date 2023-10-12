import express from 'express';
import urlModel from '../controllers/urlController';

const redirectRouter = express.Router();

redirectRouter.get('/:slug', async (req, res) => {
	const url = await urlModel.getBySlug(req.params.slug);
	if (!url) return res.status(404).send('Not found');

	return res.redirect(url.url);
});

export default redirectRouter;