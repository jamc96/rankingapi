import { Column } from "typeorm";
import { User } from "./User";

export class Referee extends User {
    @Column()
    isActive: boolean;
}