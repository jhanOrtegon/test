import axiosHttp from '@/config/axios';

export const getUser = async () => {
    try {
        const data = await axiosHttp.get('/user');
        console.log({data});
        return data;
    } catch (error) {
        console.log(error);
        // return error;
    }
};