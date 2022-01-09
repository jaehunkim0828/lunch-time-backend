const stores = [
    { id: 1, name: '재훈이네 분식점', tag: '제육', main: '제육 볶음' },
    { id: 2, name: '민선이네 치킨집', tag: '치킨', main: '양념 치킨' },
    { id: 3, name: '지선이네 치킨집', tag: '치킨', main: '간장 치킨' },
    { id: 4, name: '다몬이네 피자집', tag: '피자', main: '포테이토 피자' },
];

export async function getStore() {
    return stores;
}

export async function findStore(recommend) {
    return recommend.filter(store => !store.tag.includes(selectedFood[i]));
}