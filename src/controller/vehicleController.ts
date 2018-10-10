import { RegistrableController } from './RegistrableController';
import { Application, Request, NextFunction, Response } from 'express';
import { injectable, inject } from 'inversify';
import { dataResponse } from '../utils/response';
import Types from '../config/types';
import { VehicleService } from '../service/vehicleService';

@injectable()
export class VehicleController implements RegistrableController {

    @inject(Types.VehicleService)
    private vehicleService: VehicleService;

    public register(app: Application): void {
        app.route('/all')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const result = await this.vehicleService.getAll();
                    return dataResponse(res, result);
                    // return dataResponse(res, 'Yololu');
                } catch (error) {
                    return next(error);
                }
            });

        app.route('/byId/:id')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const id = req.params.id;
                    const result = await this.vehicleService.getById(id);
                    console.log(result);
                    return dataResponse(res, result);
                    // return dataResponse(res, 'Yololu');
                } catch (error) {
                    return next(error);
                }
            });
    }

}