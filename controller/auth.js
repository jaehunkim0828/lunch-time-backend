import bcrypt from 'bcrypt';

import * as userRepository from '../data/auth.js';

export async function login(req, res, next)  {
    const { username, password } = req.body;
    const user = await userRepository.findUser(username, password);
    user ? res.status(200).send(user) : res.status(401).send({ message: '로그인 실패'});
}

export async function createUser(req, res, next) {
    const { username, password, email } = req.body;
    
    
    const signUp = await userRepository.haveUser(username, email);
    if (signUp) return res.status(401).send({ message: '회원가입 실패' });
    await userRepository.createUser(username, password, email);
    return res.status(201).send({message: '회원가입 성공'})
}

export async function changePassword(req, res, next) {
    const { password } = req.body;
    const username = req.params.name;
    let changed = await userRepository.changePassword(username, password);
    return changed ? res.send({ message: '비밀번호 변경 완료'}) : res.send({ message: '변경 실패'});
}