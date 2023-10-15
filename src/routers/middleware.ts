import morgan from 'morgan';
import { NextFunction, Request, Response } from 'express';

const requestLogger = morgan('dev');

const errorHandler = (
	error: unknown,
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	if (error instanceof Error && 'error' in error) {
		return res.status(400).json({ error: error.error });
	}

	next(error);
};

const unknownEndpoint = (_request: Request, res: Response) => {
	res.status(404).send({ error: 'unknown endpoint' });
};

export default {
	requestLogger,
	errorHandler,
	unknownEndpoint,
};
