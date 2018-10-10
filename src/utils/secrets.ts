import dotenv from 'dotenv';
import fs from 'fs';

function getEnvironment(path: string, env: string) {
    if (fs.existsSync(path)) {
        console.log(`Using ${env} environment variables`);
        dotenv.config({ path });
    } else {
        console.error(`Can't load ${env} ${path} variables`);
        process.exit(1);
    }
}

export const ENVIRONMENT = process.env.NODE_ENV;

if (ENVIRONMENT === 'production') {
    getEnvironment('.env', ENVIRONMENT);
} else {
    if (ENVIRONMENT === 'test') {
        getEnvironment('.env.test', ENVIRONMENT);
    } else {
        getEnvironment('.env.dev', 'development');
    }
}

/**
 * Database connection
 */
export const DB_NAME = process.env.DB_NAME;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = Number(process.env.DB_PORT);
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_LOGGING = process.env.DB_LOGGING === 'true';

/**
 * Winston logger
 */
export const LOGGING_ERROR_PATH = process.env.LOGGING_ERROR_PATH;
export const LOGGING_EXCEPTION_PATH = process.env.LOGGING_EXCEPTION_PATH;
export const LOGGING_LEVEL_CONSOLE = process.env.LOGGING_LEVEL_CONSOLE;
export const LOGGING_LEVEL_FILE = process.env.LOGGING_LEVEL_FILE;