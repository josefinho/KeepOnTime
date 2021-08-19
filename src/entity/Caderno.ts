import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarefa } from "./Tarefa";

@Entity()
export class Caderno {
    @PrimaryGeneratedColumn()
    cadernoId: number;
    
    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @OneToMany(type => Tarefa, tarefa => tarefa.caderno)
    tarefas: Tarefa[];
}