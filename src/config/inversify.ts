import { Container } from 'inversify';
import { RegistrableController } from '../controller/RegistrableController';
import Types from './types';
import { VehicleController } from '../controller/vehicleController';
import { VehicleRepository } from '../repository/vehicleRepository';
import { VehicleService, VehicleServiceImp } from '../service/vehicleService';
import { UserService, UserServiceImp } from '../service/userService';
import { UserRepository } from '../repository/userRepository';
import { UserController } from '../controller/userController';

const container: Container = new Container();

// Controllers
container.bind<RegistrableController>(Types.Controller).to(VehicleController);
container.bind<RegistrableController>(Types.Controller).to(UserController);

// Services
container.bind<VehicleService>(Types.VehicleService).to(VehicleServiceImp).inSingletonScope();
container.bind<UserService>(Types.UserService).to(UserServiceImp).inSingletonScope();

// Repositories
container.bind<VehicleRepository>(Types.VehicleRepository).to(VehicleRepository).inSingletonScope();
container.bind<UserRepository>(Types.UserRepository).to(UserRepository).inSingletonScope();

// Services

export { container };