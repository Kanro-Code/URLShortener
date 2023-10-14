import morgan from 'morgan';
import { NextFunction, Request, Response } from 'express';

const requestLogger = morgan('dev');

const errorHandler = (
	error: Error,
	_request: Request,
	_res: Response,
	next: NextFunction
) => {

	// TODO: Actually handle errors

	return next(error);
};

const unknownEndpoint = (_request: Request, res: Response) => {
	res.status(404).send({ error: 'unknown endpoint' });
};

export default {
	requestLogger,
	errorHandler,
	unknownEndpoint,
};
