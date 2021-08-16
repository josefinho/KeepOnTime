
export interface Tarefa {
    id: string;
    titulo: string,
    descricao: string,
    prazo: Date;
    cor_rgb: string;
    data_criacao: Date;
    data_conclusao: Date;
}

export interface Caderno {
    id: string;
    nome: string;
    descricao: string;
    tarefas: Tarefa[];
}

export interface Prioridade {
    id: number;
    nome: string;
    sigla: string;
}