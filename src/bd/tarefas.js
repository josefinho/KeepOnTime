const tabelas = require('./schema')
const Tarefa = tabelas.Tarefa

function criarTarefa(tarefa) {

    const tarefa = Tarefa.create({
        titulo: "Um titulo",
    })

    let id = tarefa.id;

    console.log(`O id é: ${id}`)
    return id;
}

function recuperListaDeTarefas() {
    let tarefas = Tarefa.findAll()

    return tarefas;
}