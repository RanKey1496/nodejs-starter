import { injectable, inject } from 'inversify';
import { Vehicle } from '../entity/vehicle';
import Types from '../config/types';
import { VehicleRepository } from '../repository/vehicleRepository';
import { NotFound } from '../utils/exceptions';

export interface VehicleService {
    getAll(): Promise<Vehicle[]>;
    getById(id: string): Promise<Vehicle>;
}

@injectable()
export class VehicleServiceImp implements VehicleService {

    constructor(@inject(Types.VehicleRepository) private vehicleRepository: VehicleRepository) {}

    public async getAll(): Promise<Vehicle[]> {
        return await this.vehicleRepository.findAll();
    }

    public async getById(id: string): Promise<Vehicle> {
        const vehicle = await this.vehicleRepository.findById(id);
        if (vehicle !== undefined) return vehicle;
        throw new NotFound('cant find tu madre');
    }

}