import * as tagRepository from '../../data/api/tag.js';

export async function getTagList(req, res, next) {
    const { x, y } = req.body;
    console.log(req.body);
    const tags = await tagRepository.getTags(x, y);
    const result = tags[0].map(tag => tag.tag).reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
    res.send({ tags: result });
};