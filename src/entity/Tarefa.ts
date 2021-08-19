import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caderno } from "./Caderno";

@Entity()
export class Tarefa {
    @PrimaryGeneratedColumn()
    tarefaId: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    prazo: Date;

    @Column()
    dataCriacao: Date;

    @Column()
    dataConclusao: Date;

    @ManyToOne(type => Caderno, caderno => caderno.tarefas)
    caderno: Caderno;
}