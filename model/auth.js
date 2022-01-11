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
*                         description: Enter the username.
*                     password:
*                         type: string
*                         description: Enter the password
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
*                         description: Enter the username.
*                     password:
*                         type: string
*                         description: Enter the password
*                     name:
*                         type: string
*                         description: Enter the name
*                     email:
*                         type: email
*                         description: Enter the email
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