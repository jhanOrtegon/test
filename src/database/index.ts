import mysql from 'mysql';
import { getEnv } from '@/helpers';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = getEnv();

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    // port: DB_PORT,
    // charset: 'utf8mb4_general_c1'
});


connection.connect();
console.log('conectado a mysql');

connection.on('err', (err)=>{
    if(err){
        console.log(err);
        connection.end();
    }
});

export const database = connection;