import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from "typeorm";
import { Tournament } from "./Tournament";
import { Game } from "./Game";

@Entity()
export class GameMatch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "timestamp"})
    startTime: Date;

    @Column({type: "timestamp"})
    endTime: Date;

    @OneToMany(() => Game, game => game.match)
    games: Game[];

    @ManyToOne(() => Tournament, tournament => tournament.matches)
    tournament: Tournament;
}