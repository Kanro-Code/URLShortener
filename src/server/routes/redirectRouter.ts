import express from 'express';

const redirectRouter = express.Router();

redirectRouter.get('/:id', (req, res, next) => {
	if (req.params.id === '@react-refresh') {
		return next();
	}
	console.log(req.params.id);
	return res.redirect(301, 'http://google.com');
});

export default redirectRouter;
