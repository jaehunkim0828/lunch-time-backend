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
*                           default: "떡볶이"
*                     x:
*                       type: integer
*                       default: 126.9140
*                     y:
*                       type: integer
*                       default: 37.5482
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
*                       default: 126.9140
*                     y:
*                       type: integer
*                       default: 37.5482
*/

// api

/**
* @swagger
* paths:
*  /api/tag:
*   post:
*     tags: [api]
*     summary: tag 리스트 받기
*     description: tag들 받기
*     requestBody:
*       required: true
*       content:
*           application/json:
*               schema:
*                   $ref: '#/components/schemas/findtag'
*     responses:
*       "200":
*         discription: OK
*         content:
*           application:json:
*               schema:
*                   type: object
*                   properties:
*                      tags:
*                        type: array
*                        items:
*                           type: string
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
*     description: stores 받기
*     requestBody:
*       required: true
*       content:
*           application/json:
*               schema:
*                   $ref: '#/components/schemas/findstore'
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