import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import restaurantRouter from './routers/restaurant.routes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/menuMinder');

const router = express.Router();

router.use('/restaurant', restaurantRouter);

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));