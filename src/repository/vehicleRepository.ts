import { injectable } from 'inversify';
import { GenericRepositoryImp } from './repository';
import { Vehicle } from '../entity/vehicle';
import { getRepository } from 'typeorm';

@injectable()
export class VehicleRepositoryImp extends GenericRepositoryImp<Vehicle> {

    constructor() {
        super(getRepository(Vehicle));
    }

    public async findByTuPapa(papa: string) {
        return Promise.resolve(true);
    }
}