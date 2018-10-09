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

const ENVIRONMENT = process.env.NODE_ENV;

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
 * Winston logger
 */
export const LOGGING_ERROR_PATH = process.env.LOGGING_ERROR_PATH;
export const LOGGING_EXCEPTION_PATH = process.env.LOGGING_EXCEPTION_PATH;
export const LOGGING_LEVEL_CONSOLE = process.env.LOGGING_LEVEL_CONSOLE;
export const LOGGING_LEVEL_FILE = process.env.LOGGING_LEVEL_FILE;