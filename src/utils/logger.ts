import { LoggerOptions, createLogger, transports } from 'winston';
import { LOGGING_LEVEL_CONSOLE, LOGGING_ERROR_PATH, LOGGING_LEVEL_FILE, LOGGING_EXCEPTION_PATH } from './secrets';

export const logger = createLogger(<LoggerOptions> {
    exitOnError: false,
    transports: [
        new transports.Console({
            level: LOGGING_LEVEL_CONSOLE
        }),
        new transports.File({
            filename: LOGGING_ERROR_PATH,
            level: LOGGING_LEVEL_FILE,
            maxsize: 1024 * 1024 * 10
        })
    ], exceptionHandlers: [
        new transports.File({
            filename: LOGGING_EXCEPTION_PATH,
            level: LOGGING_LEVEL_FILE,
            maxsize: 1024 * 1024 * 10
        })
    ]
});