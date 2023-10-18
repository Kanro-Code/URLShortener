import express from 'express';

import urlRouter from './routes/urlRouter';
import redirectRouter from './routes/redirectRouter';

const app = express();

app.use(express.json());

app.use('/api/url', urlRouter);
app.use('/', redirectRouter);

// app.get('/:id', (req, res, next) => {
// 	if (req.params.id === '@react-refresh') {
// 		return next();
// 	}
// 	console.log(req.params.id);
// 	return res.redirect(301, 'http://google.com');
// });

export default app;
