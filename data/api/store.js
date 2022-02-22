import { db } from '../../db.js';

export async function getStores(x, y) {
    return await db.execute('SELECT DISTINCT (6371 * acos(cos(radians(?))*cos(radians(y))*cos(radians(x) -radians(?))+sin(radians(?))*sin(radians(y)))) AS distance, s.name, s.tag, s.x, s.y FROM lunchtime.stores s HAVING distance <= 1 ORDER BY distance LIMIT 0,100', [y, x, y])
}

export async function selectedStores(stores, selected) {
    return stores.filter(store => {
        if (!selected.includes(store.tag)) return store;
        return false;
    })
}

export async function restyle(stores) {
    return stores.map(store => {
        return { name: store.name, distance: Math.round(store.distance * 1000), hashTags: [`#${store.tag}`], x: store.x, y: store.y };
    })
}