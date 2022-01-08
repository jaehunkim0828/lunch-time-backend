import express from 'express';

import userRouter from './auth.js';
import foodRouter from './food.js';

const rootRouter = express.Router();

rootRouter.use('/auth', userRouter);
rootRouter.use('/food', foodRouter);

export default rootRouter;

