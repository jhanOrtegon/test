import { createPool } from 'mysql2/promise';
import { getEnv } from '@/helpers';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = getEnv();

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: Number(DB_PORT)
});