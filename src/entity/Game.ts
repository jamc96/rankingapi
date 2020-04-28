import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { GameMatch } from "./GameMatch";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => GameMatch, match => match.games)
    match: GameMatch;

    @Column()
    leftPoint: number;

    @Column()
    rightPoint: number;
}