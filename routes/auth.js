import express from 'express';

import * as userRepository from '../data/auth.js';
import * as userController from '../controller/auth.js';

const userRouter = express.Router();



//post: 회원가입, 로그인, 아이디찾기, 비밀번호바꾸기
/**
* @swagger
* paths:
*  /auth/login:
*   post:
*     tags: [Auth]
*     summary: 로그인
*     parameters:
*       - name: code
*         in: Post
*         type: string
*         description: 로그인 정보(아이디)
*     responses:
*       "200":
*         discription: 로그인 성공
*         contnet:
*           application:json
*       "400":
*         discription: 잘못된 파라메타 전달
*     
*/

/**
* @swagger
* paths:
*  /auth/register:
*   post:
*     tags: [Auth]
*     summary: 회원가입
*     parameters:
*       - name: code
*         in: Post
*         type: string
*         description: 회원가입 성공
*     responses:
*       "200":
*         discription: 회원가입 성공
*       "400":
*         discription: 잘못된 파라메타 전달
*/

/**
* @swagger
* paths:
*  /:name/password:
*   post:
*     tags: [Auth]
*     summary: 비밀번호 찾기
*     parameters:
*       - name: code
*         in: Post
*         type: string
*         description: 로그인 정보(아이디)
*     responses:
*       "200":
*         discription: 로그인 성공
*         contnet:
*           application:json
*       "400":
*         discription: 잘못된 파라메타 전달
*/


userRouter.route('/')
    .get(async (req, res, next) => {
        res.send(await userRepository.getUsers());
    });
userRouter.route('/login').post(userController.login);
userRouter.route('/register').post(userController.createUser);
userRouter.route('/:name/password').post(userController.changePassword);



export default userRouter;