import morgan from 'morgan';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(err.message);
	if ('message' in err) {
		return res.status(500).json({ error: err.message });
	}
	return next(err);
};

export const unknownEndpoint = (req: Request, res: Response) => {
	res.status(404).send({ error: 'unknown endpoint' });
};

export const logger = morgan('common');
