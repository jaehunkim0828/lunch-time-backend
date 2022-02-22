import * as storeRepository from '../../data/api/store.js';

export async function findStore(req, res, next) {
    const { selected, x, y } = req.body;
    // selectedFood = ['tag1', 'tag2'];
    const stores = await storeRepository.getStores(x, y);
    const wantedStores = await storeRepository.selectedStores(stores[0], selected);
    const result = await storeRepository.restyle(wantedStores);
    res.send(result);
}
