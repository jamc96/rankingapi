import { PrimaryGeneratedColumn, Column } from "typeorm";

export class GameType {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;
}