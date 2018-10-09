import { Container } from 'inversify';
import { RegistrableController } from '../controller/RegistrableController';
import Types from './types';
import { VehicleController } from '../controller/vehicleController';
import { VehicleRepository, VehicleRepositoryImp } from '../repository/vehicleRepository';

const container: Container = new Container();

// Controllers
container.bind<RegistrableController>(Types.Controller).to(VehicleController);

// Repositories
container.bind<VehicleRepository>(Types.VehicleRepository).to(VehicleRepositoryImp).inSingletonScope();

// Services

export { container };