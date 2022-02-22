import express from 'express';

import * as storeRepository from '../../controller/api/store.js';

const storeRouter = express.Router();

storeRouter.route('/').post(storeRepository.findStore);

export default storeRouter;