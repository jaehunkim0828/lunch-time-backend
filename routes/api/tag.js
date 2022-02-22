import express from 'express';
import cors from 'cors';

import * as tagRepository from '../../controller/api/tag.js';

const tagRouter = express.Router();

tagRouter.route('/').post(tagRepository.getTagList)
.get((req, res, next) => {
    res.send('hello');
})

export default tagRouter;