import express from 'express';
import { body } from 'express-validator';

import * as storeRepository from '../../controller/api/store.js';
import { validate } from '../../middlewares/validator.js';

const validatestore = [
    body('x')
        .trim()
        .isString()
        .notEmpty()
        .withMessage('x좌표가 안넘어왔습니다.'),
    body('y')
        .trim()
        .notEmpty()
        .withMessage('y좌표가 안넘어 왔습니다.'),
    body('selected')
        .isArray()
        .withMessage('selected는 array이여야합니다'),
    body('page')
        .trim()
        .notEmpty()
        .isInt()
        .withMessage('page가 안넘어왔습니다.'),
    validate
];


const storeRouter = express.Router();

storeRouter.route('/').post(validatestore, storeRepository.findStore);

export default storeRouter;