import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { config } from '../config.js';
import { db } from '../db.js';

const users = [
    { id: 1, username: 'jaehun0828', name: '김재훈', password: '123456', email: 'kkaa81@naver.com' },
    { id: 2, username: 'jaehunkim0828', name: '재훈', password: '1111', email: 'ls2lme@naver.com' }
]

export async function getUsers() {
    return users;
}

export async function findUser(username, password) {
    for (let i = 0; i < users.length; i += 1) {
        const user = users[i];
        if (bcrypt.compareSync(password, user.password) && username === user.username) {
            console.log('2')
            const token = jwt.sign({
                id: user.id
            }, 
            config.secretKey, {

                expiresIn: '1d'
            })
            return token;
        }
    }
    return false;
}

export async function haveUser(username, email) {
    // return users.find(user => user.username === username || user.email === email);
    const userFind = await db.execute('SELECT name, email FROM users WHERE name=? and email=?', [username, email]);
    if (userFind[0].length) return true;
    return false;
}

export async function changePassword(username, password) {
    let changed = false;
    users.map(user => {
        if (user.username === username) {
            user.password = password;
            changed = true;
            return user;
        }
        return user;
    })
    return changed;
}

export async function createUser(username, password, email) {
    const created = Date.now();
    const hashed = bcrypt.hashSync(password, 10); //password hashing // fake id 
    const user = await db.execute('INSERT INTO users (email, password, name, created_at) VALUES (?, ?, ?, ?)', [email, hashed, username, created]);
    return;
}