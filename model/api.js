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
*                       description: '[떡볶이, 냉면]'
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
*     security:
*         - api_key: []
*     responses:
*       "200":
*         discription: OK
*         content:
*           application:json:
*               schema:
*                   type: object
*                   properties:
*                       result:
*                           type: boolean
*       "404":
*          description: tag not found
*       "405":
*          description: Validation exception
*     
*/