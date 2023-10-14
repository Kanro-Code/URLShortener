import express from 'express';
import urlModel from '../controllers/urlController.js';

const redirectRouter = express.Router();

redirectRouter.use('/', express.static('public'));

redirectRouter.get('/:slug', async (req, res) => {
	const url = await urlModel.getBySlug(req.params.slug);
	if (!url) return res.status(404).send('Not found');

	return res.redirect(url.url);
});

export default redirectRouter;
