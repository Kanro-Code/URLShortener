import ViteExpress from 'vite-express';
import logger from './logger';
import app from './app';

/**
 * Start the server and listen on port 3000
 */
ViteExpress.listen(app, 3000, () => {
	logger.info('Server is listening on http://localhost:3000...');
});
