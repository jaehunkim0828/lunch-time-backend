import axios from 'axios';

import { config } from '../config.js';

const kakaoKey = config.key.kakaoKey;
const header = {
    header: {
        Authorization: `KakaoAK ${kakaoKey}`
    }
}


let stores = [];

const tags = [];

export async function getStores() {
    return stores;
}

export async function getTag() {
    return tags;
}

export async function getTags() {
    return tags;
}

export async function setStores(result) {
    stores = result;
}

export async function findTagId(foodName) {
    return tags.find(tag => tag.name === foodName);
}

export async function findStore(recommend, food) {
    // return recommend.filter(store => !store.tag.includes(selectedFood[i]));
    return recommend.filter(store => store.tag !== food.id);
}

export async function findStoreApi(page, longitude, latitude) {
    // console.log('경도',longitude,'위도', latitude)
    const store = await axios({
        url:'https://dapi.kakao.com/v2/local/search/category.json',
        method:"GET",
        headers:{"Authorization":`KakaoAK ${kakaoKey}`},
        params:{
            category_group_code: 'FD6',
            //0.0005  = 50m
            rect: `${latitude - 0.0005},${longitude - 0.0005},${latitude + 0.0005},${longitude + 0.0005}`,
            page: page,
        }
    });
    return store;
}

export async function restyle(data) {
    return data.map((store, i) => {
        const category = store['category_name'].split('>');
        if (category.length > 2) {
            const restyled = { 
                id: i,
                address: store['address_name'],
                tag: category[category.length - 1].trim(),
                kind: category[1].trim(),
                name: store['place_name'],
                url: store['place_url']
            };
            return restyled;
        } else {
            return {
                id: i,
                address: store['address_name'],
                tag: category[category.length - 1].trim(),
                kind: category[0].trim(),
                name: store['place_name'],
                url: store['place_url']
            }
        }
    })
}

export async function restyleFood(data) {
    return data.map((store, i) => {
        // console.log(store);
        const category = store['category_name'].split('>');
        if (category.length > 3) {
            const restyled = { 
                tag: category[2].trim(),
            };
            return restyled;
        } else if (category.length === 3) {
            const restyled = { 
                tag: category[category.length - 1].trim(),
            };
            return restyled;
        } else {
            return {
                tag: category[category.length - 1].trim(),
            }
        }
    })
}