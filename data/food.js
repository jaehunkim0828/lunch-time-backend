const stores = [
    { id: 1, name: '재훈이네 분식점', tag: 1, main: '제육 볶음' },
    { id: 2, name: '민선이네 치킨집', tag: 2, main: '양념 치킨' },
    { id: 3, name: '지선이네 치킨집', tag: 2, main: '간장 치킨' },
    { id: 4, name: '다몬이네 피자집', tag: 4, main: '포테이토 피자' },
];

const tags = [
    { id: 1, name: '제육' },
    { id: 2, name: '치킨' },
    { id: 3, name: '떡볶이' },
    { id: 4, name: '피자' },
    { id: 5, name: '보쌈' },
]

export async function getStores() {
    return stores;
}

export async function getTags() {
    return tags;
}

export async function findTagId(foodName) {
    return tags.find(tag => tag.name === foodName);
}

export async function findStore(recommend, food) {
    // return recommend.filter(store => !store.tag.includes(selectedFood[i]));
    return recommend.filter(store => store.tag !== food.id);
}