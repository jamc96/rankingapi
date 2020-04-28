import { PrimaryGeneratedColumn, OneToMany, Entity, Column } from "typeorm";
import { GameMatch } from "./GameMatch";

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({type: "timestamp"})
    date: Date;

    @OneToMany(() => GameMatch, match => match.tournament)
    matches: GameMatch[];
}