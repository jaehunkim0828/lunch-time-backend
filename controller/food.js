import * as foodRepository from '../data/food.js';

export async function findStore(req, res, next) {
    const { selectedFood } = req.body;
    let recommend = await foodRepository.getStores();
    for (let i = 0; i < selectedFood.length; i += 1) {
        const food = await foodRepository.findTagId(selectedFood[i]);
        if (!food) return res.status(404).send({ message: '없는 음식 이름 입니다.'});
        recommend = await foodRepository.findStore(recommend, food);
        console.log(recommend);
    }
    res.send(recommend);
}

export async function getTags(req, res, next) {
    const tags = await foodRepository.getTags();
    return res.status(200).send(tags);
}