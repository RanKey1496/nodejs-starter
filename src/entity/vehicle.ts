import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Vehicle')
export class Vehicle {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

}