import { RegistrableController } from './RegistrableController';
import { Application } from 'express';
import { injectable } from 'inversify';

@injectable()
export class ProductController implements RegistrableController {

    public register(app: Application): void {

    }

}