import express from 'express';

import storeRouter from './store.js';
import tagRouter from './tag.js';

const apiRouter = express.Router();

apiRouter.use('/store', storeRouter);
apiRouter.use('/tag', tagRouter);

export default apiRouter;