import express from 'express';

import * as foodController from '../controller/food.js';

const foodRouter = express.Router();

foodRouter.route('/')
    .get(foodController.getStore)
    .post(foodController.findStore) //선택한 음식 빼고 나머지 음식점 보내주기.
foodRouter.route('/tag').get(foodController.getTags); // 모든 tag들 보내주기.
foodRouter.route('/api/name').get(foodController.getFoodName);

export default foodRouter;