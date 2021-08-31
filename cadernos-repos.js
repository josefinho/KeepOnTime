const { Caderno } = require('./schema')

/**
 * Cria um caderno no banco de dados, retornando o seu id
 * 
 * Exemplo de objeto caderno:
 * {
 *     nome: "Rotina diária",
 *     descricao: "Tarefas que vou fazer diariamente"
 * }
 * 
 * @param {Object} Caderno 
 * @returns {uuid} id do Caderno criado
 */

 async function criarCaderno(caderno) {
    const novoCaderno = await Caderno.create({
        nome: caderno.nome,
        descricao: caderno.descricao,
    });
    return novoCaderno.id;
}

/** 
 * Manda o id do Caderno a ser editado e um objeto contendo
 * os campos a serem atualizados.
 * 
 * @param {uuid} id_Caderno 
 * @param {Object} CadernoEditado 
 */
async function editarCaderno(id_Caderno, CadernoEditado) {
    Caderno.update(CadernoEditado, { where: { id: id_Caderno }})
}

/**
 * @param {uuid} Caderno_id 
 */
async function removerCaderno(Caderno_id) {
    const Caderno = await Caderno.findByPk(Caderno_id);
    Caderno.destroy();
}

/**
 * 
 * @returns {Object[]} Lista de Cadernos
 */
async function pegarListaCadernos() {
    return await Caderno.findAll();
}

module.exports = {
    criarCaderno,
    editarCaderno,
    removerCaderno,
    pegarListaCadernos,
}