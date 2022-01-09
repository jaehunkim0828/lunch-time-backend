import * as foodRepository from '../data/food.js';

export async function findStore(req, res, next) {
    const { selectedFood } = req.body;
    let recommend = stores;
    for (let i = 0; i < selectedFood.length; i += 1) {
        recommend = await foodRepository.findStore(recommend);
    }
    res.send(recommend);
}