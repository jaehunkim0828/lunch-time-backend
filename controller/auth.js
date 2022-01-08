import bcrypt from 'bcrypt';

import * as userRepository from '../data/auth.js';

export async function login(req, res, next)  {
    const { username, password } = req.body;
    const user = await userRepository.findUser(username, password);
    user ? res.status(200).send(user) : res.status(401).send({ message: '로그인 실패'});
}

export async function createUser(req, res, next) {
    const { username, name, password, email } = req.body;
    
    const hashed = bcrypt.hashSync(password, 10); //password hashing
    const id = Date.now().toString(); // fake id
    const signUp = await userRepository.haveUser(username, email);
    if (signUp) return res.status(401).send({ message: '회원가입 실패' });
    const users = await userRepository.getUsers();

    users.push({ id, name, username, password: hashed, email });
    return res.status(201).send({message: '회원가입 성공'})
}

export async function changePassword(req, res, next) {
    const { password } = req.body;
    const username = req.params.name;
    let changed = await userRepository.changePassword(username, password);
    return changed ? res.send({ message: '비밀번호 변경 완료'}) : res.send({ message: '변경 실패'});
}