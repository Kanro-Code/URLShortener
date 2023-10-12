import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import urlRouter from './routers/urlRouter';
import redirectRouter from './routers/redirectRouter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/url', urlRouter);
app.use('/', redirectRouter);

export default app;
