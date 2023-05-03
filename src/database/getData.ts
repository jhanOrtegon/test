import { database } from '.';

export const getData = async () => {
    console.log('HOla');
    try {
        return (await new Promise ((resolve, reject)=>{
            database.query(
                'SElECT * FROM user', (err, data) => (err ? reject(err) : resolve(data))
            );
        }));
    } catch (error) {
        return error;
    }
};