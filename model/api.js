// schema

/** 
* @swagger
*     components:
*         schemas:
*             findstore:
*                 type: object
*                 required:
*                     - selected
*                     - x
*                     - y
*                 properties:
*                     selected:
*                       type: array
*                       items:
*                           type: string
*                           description: 떡볶이, 라면
*                     x:
*                       type: integer
*                       description: '126.736684844239'
*                     y:
*                       type: integer
*                       description: '37.4128984885048'
*/

/** 
* @swagger
*     components:
*         schemas:
*             findtag:
*                 type: object
*                 required:
*                     - x
*                     - y
*                 properties:
*                     x:
*                       type: integer
*                     y:
*                       type: integer
*/

// api

/**
* @swagger
* paths:
*  /api/tag:
*   post:
*     tags: [api]
*     summary: tag 리스트 받기
*     consumes:
*       - "application/json"
*       - "application/xml"
*     description: tag들 받기
*     produces:
*       - "application:json"
*     parameters:
*       - name: body
*         in: body
*         required: true
*         schema:
*           $ref: '#/components/schemas/findtag'
*     responses:
*       "200":
*         discription: OK
*         content:
*           application:json:
*               schema:
*                   type: object
*                   properties:
*                       tags:
*                           type: boolean
*       "404":
*          description: tag not found
*     
*/

/**
* @swagger
* paths:
*  /api/store:
*   post:
*     tags: [api]
*     summary: store 리스트 받기
*     consumes:
*       - "application/json"
*       - "application/xml"
*     description: stores 받기
*     produces:
*       - "application:json"
*     parameters:
*       - name: body
*         in: body
*         required: true
*         schema:
*           $ref: '#/components/schemas/findstore'
*     responses:
*       "200":
*         discription: OK
*         content:
*           application:json:
*               schema:
*                   type: object
*                   properties:
*                       stores:
*                           type: array
*                           items:
*                               type: object
*                               properties:
*                                   name:
*                                       type: string
*                                   distance:
*                                       type: integer
*                                   x:
*                                       type: number
*                                   y:
*                                       type: number
*                                   hashTags:
*                                       type: array
*                                       items:
*                                           type: string
*       "404":
*          description: stores not found
*     
*/