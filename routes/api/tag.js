import express from 'express';
import { body } from 'express-validator';

import { validate } from '../../middlewares/validator.js';

const validatetag = [
    body('x')
        .trim()
        .notEmpty()
        .withMessage('x좌표가 안넘어왔습니다.'),
    body('y')
        .trim()
        .isLength({ min: 6 })
        .withMessage('y좌표가 안넘어 왔습니다.'),
    validate
];

import * as tagRepository from '../../controller/api/tag.js';

const tagRouter = express.Router();

tagRouter.route('/').post(validatetag, tagRepository.getTagList)

export default tagRouter;