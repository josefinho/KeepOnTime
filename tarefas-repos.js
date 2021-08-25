const { sequelize, Tarefa } = require('./schema')


function abrirConexao() {}
function fecharConexao() {}

// Formato da tarefa:

/**
 * Salva uma tarefa no banco de dados, retornando a id da tarefa salva
 * 
 * Exemplo de objeto de tarefa:
 * {
 *   id: 1,
 *   titulo: "teste",
 *   prazo: "1999-12-12",
 *   hora: "15:23",
 *   descricao: "testte"
 * };
 */
async function criarTarefa(tarefa) {
    const novaTarefa = await Tarefa.create({
        id: tarefa.id,
        titulo: tarefa.titulo,
        prazo: tarefa.prazo,
        hora: tarefa.hora,
        descricao: tarefa.descricao,
    });
    return novaTarefa.id;
}


async function pegarListaTarefas(caderno_id) {
    if (caderno_id)
        return await Tarefa.findAll({ where: {caderno_id: caderno_id}})
    else
        return await Tarefa.findAll();
}

async function concluirTarefa(tarefa_id) {

}


module.exports = {
    criarTarefa,
    pegarListaTarefas,

}