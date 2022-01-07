const users = [
    { id: 1, username: 'jaehun0828', name: '김재훈', password: '123456', email: 'kkaa81@naver.com' },
    { id: 2, username: 'jaehunkim0828', name: '재훈', password: '1111', email: 'ls2lme@naver.com' }
]

export async function getUsers() {
    return users;
}

export async function findUser(username, password) {
    return users.find(user => username === user.username && password === user.password);
}

export async function haveUser(username, email) {
    return users.find(user => user.username === username || user.email === email);
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