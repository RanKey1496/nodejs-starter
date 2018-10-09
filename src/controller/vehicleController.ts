import { RegistrableController } from './RegistrableController';
import { Application, Request, NextFunction, Response } from 'express';
import { injectable, inject } from 'inversify';
import { dataResponse } from '../utils/response';
import Types from '../config/types';
import { Repository } from '../repository/repository';
import { Vehicle } from '../entity/vehicle';
import { VehicleRepositoryImp } from '../repository/vehicleRepository';

@injectable()
export class VehicleController implements RegistrableController {

    @inject(Types.VehicleRepository)
    private vehicleRepository: VehicleRepositoryImp;

    public register(app: Application): void {
        app.route('/')
            .get((req: Request, res: Response, next: NextFunction) => {
                try {
                    const result = this.vehicleRepository.findAll();
                    return dataResponse(res, result);
                } catch (error) {
                    return next(error);
                }
            });
    }

}