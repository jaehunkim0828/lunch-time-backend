import express from 'express';
import { body } from 'express-validator';

import * as userRepository from '../data/auth.js';
import * as userController from '../controller/auth.js';
import { validate } from '../middlewares/validator.js';

const userRouter = express.Router();

const validateRegister = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('username을 입력해주세요.'),
    body('password')
        .trim()
        .isLength({ min: 6 })
        .withMessage('비밀번호는 최소 5글자입니다.'),
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('이메일으로 입력해주세요.'),
    validate
]

const validateFindPassword = [
    body('password')
        .trim()
        .notEmpty()
        .withMessage('바꾸실 비밀번호를 입력해주세요.'),
    validate
]


userRouter.route('/')
    .get(async (req, res, next) => {
        res.send(await userRepository.getUsers());
    });
userRouter.route('/login').post(validate, userController.login);
userRouter.route('/register').post(validateRegister, userController.createUser);
userRouter.route('/:name/password').post(validateFindPassword, userController.changePassword);



export default userRouter;