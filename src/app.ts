import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import errorHandler from 'errorhandler';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { container } from './config/inversify';
import { RegistrableController } from './controller/RegistrableController';
import Types from './config/types';

export default class App {

    public async init() {
        const app: Application = express();
        app.set('port', process.env.PORT || 3000);

        app.use(errorHandler());
        app.use(compression());
        app.use(helmet());
        app.use(morgan('combined'));
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        const controllers: RegistrableController[] = container.getAll<RegistrableController>(Types.Controller);
        controllers.forEach(controller => controller.register(app));

        return Promise.resolve(app);
    }

    public async start() {
        const app = await this.init();
        const server = app.listen(app.get('port'), async () => {
            console.log(`Service running at port ${app.get('port')} in ${app.get('env')} mode`);
            console.log('Date: ', new Date());
        });
        return Promise.resolve(server);
    }

}