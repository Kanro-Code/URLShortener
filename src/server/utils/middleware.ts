import morgan from 'morgan';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(error.message);

	return next(error);
};

export const unknownEndpoint = (req: Request, res: Response) => {
	res.status(404).send({ error: 'unknown endpoint' });
};

export const logger = morgan('dev');
