export const getEnv = () => {
    return{
        DB_HOST:       process.env.NEXT_PUBLIC_DB_HOST,
        DB_USER:       process.env.NEXT_PUBLIC_DB_USER,
        DB_PASSWORD:   process.env.NEXT_PUBLIC_DB_PASSWORD,
        DB_NAME:       process.env.NEXT_PUBLIC_DB_NAME,
        DB_PORT:       process.env.NEXT_PUBLIC_DB_PORT
    };
};