import express from 'express';

import * as userRepository from '../data/auth.js';
import * as userController from '../controller/auth.js';

const userRouter = express.Router();

//post: 회원가입, 로그인, 아이디찾기, 비밀번호바꾸기

userRouter.route('/')
    .get(async (req, res, next) => {
        res.send(await userRepository.getUsers());
    });
userRouter.route('/login').post(userController.login);
userRouter.route('/register').post(userController.createUser);
userRouter.route('/:name/password').post(userController.changePassword);

export default userRouter;