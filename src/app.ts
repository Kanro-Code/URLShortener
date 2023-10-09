import express from 'express';
import * as middleware from './utils/middleware';
import urlRouter from './controllers/urlRouter';

const app = express();

app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/url', urlRouter);

export default app;
