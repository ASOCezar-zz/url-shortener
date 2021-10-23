import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import appRoutes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(appRoutes);

app.listen(process.env.API_PORT, () =>
  console.log(`Running on URL: ${process.env.API_URL}:${process.env.API_PORT}`),
);
