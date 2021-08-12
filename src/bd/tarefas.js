const tabelas = require('./schema')
const Tarefa = tabelas.Tarefa

function inserirTarefa(titulo, descricao, prazo) {

    const novaTarefa = Tarefa.create({
        titulo: titulo,
        descricao: descricao,
        prazo: prazo,
    })

    let id = novaTarefa.id;

    console.log(`O id é: ${id}`)
    return id;
}

function recuperListaDeTarefas() {
    let tarefas = Tarefa.findAll()

    return tarefas;
}

module.exports = {
    recuperListaDeTarefas,
    inserirTarefa,
}