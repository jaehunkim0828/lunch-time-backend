import { db } from '../../db.js';

export async function getStores(x, y, selected, page) {
    return await db.execute(`SELECT DISTINCT (6371 * acos(cos(radians(?))*cos(radians(y))*cos(radians(x) -radians(?))+sin(radians(?))*sin(radians(y)))) AS distance, s.name, s.tag, s.x, s.y FROM lunchtime.stores s WHERE s.tag NOT IN (?) HAVING distance <= 1 ORDER BY distance LIMIT ${page * 100} ,100`, [y, x, y, selected.join(' ,')])
}

export async function restyle(stores, page) {
    let count = 0;
    return [stores.map(store => {
        count += 1;
        return { name: store.name, distance: Math.round(store.distance * 1000), hashTags: [`#${store.tag}`], x: store.x, y: store.y };
    }), page + 1, count];
}