import mysql from 'mysql2';

import { config } from 'dotenv';

const { host, username, database, password } = config.db;

const pool = mysql.createPool({
    host: host,
    user: username,
    database: database,
    password: password,
})

export const db = pool.promise();