import * as storeRepository from '../../data/api/store.js';

export async function findStore(req, res, next) {
    const { selected, x, y,page } = req.body;
    const stores = await storeRepository.getStores(x, y, selected, page);
    const result = await storeRepository.restyle(stores[0], page);
    res.send({ stores: result[0], page: result[1], count: result[2] });
}
