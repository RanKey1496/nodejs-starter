import { Container } from 'inversify';
import { RegistrableController } from '../controller/RegistrableController';
import Types from './types';
import { ProductController } from '../controller/productController';

const container: Container = new Container();

container.bind<RegistrableController>(Types.Controller).to(ProductController);

export { container };