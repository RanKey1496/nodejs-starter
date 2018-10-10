import { injectable } from 'inversify';
import { GenericRepositoryImp } from './repository';
import { getRepository } from 'typeorm';
import { User } from '../entity/user';

@injectable()
export class UserRepository extends GenericRepositoryImp<User> {

    constructor() {
        super(getRepository(User));
    }
}