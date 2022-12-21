import * as dotenv from 'dotenv';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router/index';
import errorMiddleware from './middlewares/error.middleware';

dotenv.config();
mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 5000;

const app: Express = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);
app.use(errorMiddleware); // always at the end;

const start = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL as string)
      .then(() => console.log('Connected DB!'));
    app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
