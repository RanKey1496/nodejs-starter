import httpStatus from 'http-status';
import { Response } from 'express';

function data(code: number, success: boolean, message: string) {
    return {
        code,
        success,
        message
    };
}

export function dataResponse(res: Response, data: any) {
    return res.status(httpStatus.OK).json({ code: httpStatus.OK, success: true, data });
}

export function notFoundResponse(res: Response, message: string) {
    return res.status(httpStatus.NOT_FOUND).json(data(httpStatus.NOT_FOUND, false, message));
}

export function badRequestResponse(res: Response, message: string) {
    return res.status(httpStatus.BAD_REQUEST).json(data(httpStatus.BAD_REQUEST, false, message));
}

export function unauthorizeResponse(res: Response, message: string) {
    return res.status(httpStatus.UNAUTHORIZED).json(data(httpStatus.UNAUTHORIZED, false, message));
}

export function conflictResponse(res: Response, message: string) {
    return res.status(httpStatus.CONFLICT).json(data(httpStatus.CONFLICT, false, message));
}

export function internalResponse(res: Response) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(data(httpStatus.INTERNAL_SERVER_ERROR, false, 'Internal server error, try again later'));
}