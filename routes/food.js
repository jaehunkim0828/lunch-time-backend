import express from 'express';

import * as foodController from '../controller/food.js';

const foodRouter = express.Router();

foodRouter.route('/')
    .get(foodController.getStore)
foodRouter.route('/api/name').get(foodController.getFoodName);

export default foodRouter;