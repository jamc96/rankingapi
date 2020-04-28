import { Entity, Column } from "typeorm";
import {User} from "./User";

@Entity()
export class Player extends User {
    @Column()
    isActive: boolean;

    @Column()
    totalPoints: number;

    @Column()
    ranking: number;
}