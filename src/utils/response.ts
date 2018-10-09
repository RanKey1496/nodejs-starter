import httpStatus from 'http-status';
import { Response } from 'express';

export function dataResponse(res: Response, data: any) {
    return res.status(httpStatus.OK).json(data);
}
