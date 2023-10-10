import morgan from 'morgan';
import { Request } from 'express';

morgan.token('data', (request: Request) =>
	request.method === 'POST' ? JSON.stringify(request.body) : ''
);

export const requestLogger = morgan(
	':method :url :status :res[content-length] - :response-time ms :data'
);
