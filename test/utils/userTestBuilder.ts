import { User } from '../../src/entity/user';
import { Vehicle } from '../../src/entity/vehicle';
import VehicleTestBuilder from './vehicleTestBuilder';

export default class UserTestBuilder {

    private user: User = new User();

    public static newUser() {
        return new UserTestBuilder();
    }

    public withId(id: number): UserTestBuilder {
        this.user.id = id;
        return this;
    }

    public withName(name: string): UserTestBuilder {
        this.user.name = name;
        return this;
    }

    public withVehicles(vehicles: Array<Vehicle>): UserTestBuilder {
        this.user.vehicles = vehicles;
        return this;
    }

    public withDefaultValues(): UserTestBuilder {
        return this.withId(1).withName('Jimbo')
            .withVehicles(VehicleTestBuilder.createListOfDefaultVehicles(5));
    }

    public build(): User {
        return this.user;
    }

    public static createListOfDefaultUsers(size: number) {
        const result = [];
        for (let i = 0; i < size; i++) {
            result.push(UserTestBuilder.newUser().withDefaultValues().build());
        }
        return result;
    }

}