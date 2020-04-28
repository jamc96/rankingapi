import { PrimaryGeneratedColumn, Column} from "typeorm";

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    age: number;

    @Column()
    gender: string;
}