const { sequelize, Tarefa } = require('./schema')


function abrirConexao() {}
function fecharConexao() {}

// Formato da tarefa:

/**
 * Salva uma tarefa no banco de dados, retornando a id da tarefa salva
 * 
 * Exemplo de objeto de tarefa:
 * {
 *   titulo: "teste",
 *   prazo: "1999-12-12",
 *   hora: "15:23",
 *   descricao: "testte"
 * };
 * @param {Object} tarefa 
 * @returns {uuid} id da tarefa criada
 */
async function criarTarefa(tarefa) {
    const novaTarefa = await Tarefa.create({
        titulo: tarefa.titulo,
        prazo: tarefa.prazo,
        hora: tarefa.hora,
        descricao: tarefa.descricao,
    });
    return novaTarefa.id;
}

/** 
 * Manda o id da tarefa a ser editada e um objeto contendo
 * os campos a serem atualizados.
 * 
 * @param {uuid} id_tarefa 
 * @param {Object} tarefaEditada 
 */
async function editarTarefa(id_tarefa, tarefaEditada) {
    const tarefa = await Tarefa.findByPk(id_tarefa);
    Object.keys(tarefaEditada).forEach(function(coluna) {
        if (tarefa.hasOwnProperty(coluna))
            tarefa[coluna] = tarefaEditada[coluna];
    });
    tarefa.save();
}

/**
 * Muda apenas o status de tarefa
 * 
 * @param {uuid} id_tarefa 
 * @param {Boolean} status 
 */
async function mudarStatusTarefa(id_tarefa, status) {
    const tarefa = await Tarefa.findByPk(id_tarefa);
    tarefa.status = status;
    tarefa.save();
}

/**
 * @param {uuid} tarefa_id 
 */
async function removerTarefa(tarefa_id) {
    const tarefa = await Tarefa.findByPk(tarefa_id);
    tarefa.destroy();
}

/**
 * 
 * @param {uuid} caderno_id 
 * @returns {Object[]} Lista de tarefas
 */
async function pegarListaTarefas(caderno_id) {
    if (caderno_id)
        return await Tarefa.findAll({ where: {caderno_id: caderno_id}})
    else
        return await Tarefa.findAll();
}

module.exports = {
    criarTarefa,
    pegarListaTarefas,
    editarTarefa,
    removerTarefa,
    mudarStatusTarefa,
}