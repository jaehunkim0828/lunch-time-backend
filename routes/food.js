import express from 'express';

import * as foodController from '../controller/food.js';

const foodRouter = express.Router();


foodRouter.route('/').post(foodController.findStore); //선택한 음식 빼고 나머지 음식점 보내주기.
foodRouter.route('/tag').get(foodController.getTags); // 모든 tag들 보내주기.

foodRouter.route('/location')
    .post((req, res, next) => {
        //위치 1km반경 구하기
    })

export default foodRouter;