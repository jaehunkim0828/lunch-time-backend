import axios from 'axios';

import * as foodRepository from '../data/food.js';

export async function getTags(req, res, next) {
    const tags = await foodRepository.getTags();
    return res.status(200).send(tags);
}

export async function getStore(req, res, next) {
    // first, get store information.
    
    for (let i = 0; i < 920; i += 1) {
        for(let j = 0; j < 598; j += 1) {
            const datas = [];
            const [longitude, latitude] = [37.4142 + j * 0.0005, 126.8915 + i * 0.0005];
            let countIndex = 1;
            //2 stop
            if (latitude <= 126.8915 && longitude < 37.6217 ) {
                //latitude longitude 이전은 넘기기.
                console.log('pass', '경도',longitude,'위도', latitude);
                continue;
            }
            console.log('경도',longitude,'위도', latitude);
            while(countIndex < 45) { // 같은 좌표에 여러 1페이지 이상 음식점들 data에 넣어주기.
                const current = await foodRepository.findStoreApi(countIndex, longitude, latitude);
                datas.push(...current.data.documents);
                if (current.data.meta.is_end) {
                    break;
                };
                countIndex += 1;
            }
            console.log('done calling kakao api');

            //second, make it the data we want

            const result = await foodRepository.restyle(datas);
            console.log('done restyle');
            //third, input database new stores

            await foodRepository.setStores(result);
            console.log('done inserting data in db');
        }
    }
    res.send('done');
}

export async function getFoodName(req, res, next) {
    const foods = [];
    for (let i = 0; i < 1; i += 1) {
        for(let j = 0; j < 1; j += 1) {
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