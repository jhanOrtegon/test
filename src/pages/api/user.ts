import { pool } from '@/config';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    
    switch (req.method) {
    case 'GET':
        return getUser(req,res); 
    
    default:
        return res.status(400).json({message: 'error de petición'});
    }
}

const getUser = async (req: NextApiRequest,res: NextApiResponse) => {
    try {
        const [ data ] = await pool.query('Select * from user where id = 72143775');
        res.status(200).json({ data});
    } catch (error) {
        res.status(500).json({message: 'error de bd'});
    }
};
