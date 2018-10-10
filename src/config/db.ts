import { ConnectionOptions } from 'typeorm';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, DB_LOGGING } from '../utils/secrets';
import { Vehicle } from '../entity/vehicle';
import { User } from '../entity/user';

export const dbOptions: ConnectionOptions = {
    type: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [
        User,
        Vehicle
    ],
    logging: DB_LOGGING,
    synchronize: false
};