import express from 'express';

import urlRouter from './routes/urlRouter';
import redirectRouter from './routes/redirectRouter';
import * as middleware from './utils/middleware';

const app = express();

app.use(express.json());
app.use(middleware.logger);

app.use('/api/url', urlRouter);
app.use('/', redirectRouter);

app.use(middleware.errorHandler);
app.use('/api/*', middleware.unknownEndpoint);

export default app;
