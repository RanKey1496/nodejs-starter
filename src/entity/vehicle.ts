import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vehicle')
export class Vehicle {

    @PrimaryGeneratedColumn()
    public id: number;

}