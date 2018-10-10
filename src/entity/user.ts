import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Vehicle } from './vehicle';

@Entity('User')
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @ManyToMany(type => Vehicle, { eager: true })
    @JoinTable()
    public vehicles: Vehicle[];

}