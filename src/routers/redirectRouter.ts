import express from 'express';
import urlModel from '../controllers/urlController.js';

const redirectRouter = express.Router();

/**
 * Serves static files from the 'public' directory.
 */
redirectRouter.use('/', express.static('src/dist'));

/**
 * Redirects the user to the original URL associated with the given slug.
 * @function
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @returns {Promise<void>} - A Promise that resolves to void.
 */
redirectRouter.get('/:slug', async (req, res) => {
	const url = await urlModel.getBySlug(req.params.slug);
	if (!url) return res.status(404).send('Not found');

	return res.redirect(url.url);
});

export default redirectRouter;
