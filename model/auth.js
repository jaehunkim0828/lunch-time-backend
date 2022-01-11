
// schema
/** 
* @swagger
*     components:
*         schemas:
*             Login:
*                 type: object
*                 required:
*                     - username
*                     - password
*                 properties:
*                     username:
*                         type: string
*                         description: jaehun0828
*                     password:
*                         type: string
*                         description: wogns123!
*/

/** 
* @swagger
*     components:
*         schemas:
*              Find store:
*                 type: object
*                 required:
*                     - selectedTag
*                     - password
*                 properties:
*                     selectedTag:
*                         type: array
*                         description: 제육, 떡볶이, 삼겹살, 라면
*/

/** 
* @swagger
*     components:
*         schemas:
*             Register:
*                 type: object
*                 required:
*                     - username
*                     - password
*                     - name
*                     - email
*                 properties:
*                     username:
*                         type: string
*                         description: jaehun0828
*                     password:
*                         type: string
*                         description: wogns123!
*                     name:
*                         type: string
*                         description: 김재훈
*                     email:
*                         type: email
*                         description:  kkaa81@naver.com
*/

/** 
* @swagger
*     components:
*         schemas:
*             Find password:
*                 type: object
*                 required:
*                     - username
*                     - password
*                 properties:
*                     username:
*                         type: string
*                         description: Enter the username.
*                     password:
*                         type: string
*                         description: Enter another password.
*/


//api

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
*         description: 로그인시 서버에 보낼 정보
*         schema:
*           $ref: '#/components/schemas/Login'
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
*         description: 회원가입할때 보내줘야할 데이터
*         schema:
*           $ref: '#/components/schemas/Register'
*     responses:
*       "200":
*         discription: 회원가입 성공
*       "400":
*         discription: 잘못된 파라메타 전달
*       schema:
*           $ref: 
*/

/**
* @swagger
* paths:
*  /auth/:id/password:
*   post:
*     tags: [Auth]
*     summary: 비밀번호 찾기
*     parameters:
*       - name: code
*         in: Post
*         type: string
*         description: 비밀번호 찾기 할때 보내줄 데이터
*         schema:
*           $ref: '#/components/schemas/Find password'
*     responses:
*       "200":
*         discription: 로그인 성공
*         contnet:
*           application:json
*       "400":
*         discription: 잘못된 파라메타 전달
*/