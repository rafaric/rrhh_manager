import express, { Express } from 'express';
import dotenv from 'dotenv';
import ApiRouter from './routes';
import { connect } from './database';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.disable('x-powered-by');

//Conectar a Database
connect();

app.use('/api/v1', ApiRouter);

export default app;
