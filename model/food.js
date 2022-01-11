// schema

/** 
* @swagger
*     components:
*         schemas:
*              Find store:
*                 type: object
*                   properties:
*                       selectedTag:
*                           type: array
*                               item:
*                                   type: string
*                 example:
*                   - selectedTag: [제육, 떡볶이, 라면, 삼겹살]
*/

// api

/**
* @swagger
* paths:
*  /food:
*   post:
*     tags: [food]
*     summary: 음식점 찾기
*     parameters:
*       - name: code
*         in: Post
*         type: string
*         description: 보내줘야할 data
*         schema:
*           $ref: '#/components/schemas/Find store'
*     responses:
*       "200":
*         discription: 로그인 성공
*         contnet:
*           application:json
*       "400":
*         discription: 잘못된 파라메타 전달
*     
*/