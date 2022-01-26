import axios from 'axios';

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

export async function getStore(req, res, next) {
    const datas = [];
    for (let i = 0; i < 10; i += 1) {
        for(let j = 0; j < 10; j += 1) {
            const [logitude, latitude] = [37.4938 + j * 0.001, 127.0228 + i * 0.001];
            let countIndex = 1;

            while(countIndex < 45) {
                const current = await foodRepository.findStoreApi(countIndex, logitude, latitude);
                datas.push(...current.data.documents);
                if (current.data.meta.is_end) {
                    // console.log('end');
                    break;
                };
                countIndex += 1;
            }
        }
    }
    const result = await foodRepository.restyle(datas);
    await foodRepository.setStores(result);
    return res.send(result);
}

export async function getFoodName(req, res, next) {
    const foods = [];
    for (let i = 0; i < 10; i += 1) {
        for(let j = 0; j < 10; j += 1) {
            const [logitude, latitude] = [37.4938 + j * 0.001, 127.0228 + i * 0.001];
            let countIndex = 1;

            while(countIndex < 45) {
                const current = await foodRepository.findStoreApi(countIndex, logitude, latitude);
                foods.push(...current.data.documents);
                if (current.data.meta.is_end) {
                    // console.log('end');
                    break;
                };
                countIndex += 1;
            }
        }
    }
    const result = await foodRepository.restyleFood(foods);
    const foodNameCount = {};
    result.map(({tag}) => {
        console.log(tag);
        if (foodNameCount[tag]) return foodNameCount[tag] += 1
        return foodNameCount[tag] = 1;
    })
    return res.send(foodNameCount);
}