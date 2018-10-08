import { Application } from 'express';

export interface RegistrableController {
    register(app: Application): void;
}