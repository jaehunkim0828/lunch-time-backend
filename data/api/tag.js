import { db } from "../../db.js"

export async function getTags(x, y) {
    return await db.execute('SELECT DISTINCT (6371 * acos(cos(radians(?))*cos(radians(y))*cos(radians(x) -radians(?))+sin(radians(?))*sin(radians(y)))) AS distance, s.tag FROM lunchtime.stores s HAVING distance <= 1 ORDER BY distance LIMIT 0,1000', [y, x, y])
}