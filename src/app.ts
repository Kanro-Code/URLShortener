import express from 'express';
import * as middleware from './utils/middleware';
import urlRouter from './controllers/urlRouter';
import redirectRouter from './controllers/redirect';

const app = express();

app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/url', urlRouter);
app.use('/', redirectRouter);

export default app;
