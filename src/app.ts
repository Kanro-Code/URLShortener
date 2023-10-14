import express from 'express';
import cors from 'cors';
import urlRouter from './routers/urlRouter.js';
import redirectRouter from './routers/redirectRouter.js';
import middleware from './routers/middleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/', redirectRouter);
app.use('/api/url', urlRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
