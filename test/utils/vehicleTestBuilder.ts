import { Vehicle } from '../../src/entity/vehicle';

export default class VehicleTestBuilder {

    private vehicle: Vehicle = new Vehicle();

    public static newVehicle() {
        return new VehicleTestBuilder();
    }

    public withId(id: number): VehicleTestBuilder {
        this.vehicle.id = id;
        return this;
    }

    public withName(name: string): VehicleTestBuilder {
        this.vehicle.name = name;
        return this;
    }

    public withDefaultValues(): VehicleTestBuilder {
        return this.withId(1).withName('Jimbo');
    }

    public build(): Vehicle {
        return this.vehicle;
    }

    public static createListOfDefaultVehicles(size: number) {
        const result = [];
        for (let i = 0; i < size; i++) {
            result.push(VehicleTestBuilder.newVehicle().withDefaultValues().build());
        }
        return result;
    }

}