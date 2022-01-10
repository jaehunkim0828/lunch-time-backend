import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import userRouter from './auth.js';
import foodRouter from './food.js';
import options from './swagger.js';

const rootRouter = express.Router();
const specs = swaggerJSDoc(options);

rootRouter.use('/auth', userRouter);
rootRouter.use('/food', foodRouter);
rootRouter.use('/', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true}))


export default rootRouter;

