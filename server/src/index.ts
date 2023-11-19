import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

import deckRoutes from './routes/deck-routes';

const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', deckRoutes);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT);
});

