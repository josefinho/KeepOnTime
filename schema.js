const Sequelize = require('sequelize');
const db = require('./create_db');

const Tarefa = db.define('tarefa', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: { type: Sequelize.TEXT },
    prazo: { type: Sequelize.DATE },
//    data_criacao: { type: Sequelize.DATE, default: Sequelize.NOW() },
//    data_conclusao: { type: Sequelize.DATE },
//    cor_rgb: { type: Sequelize.STRING },
//    repete_em_horas: { type: Sequelize.INTEGER },
//    repete_em_dias: { type: Sequelize.INTEGER },

}, { underscored: true })

/*
const Caderno = db.define('caderno', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
}, { underscored: true })

const Prioridade = db.define('prioridade', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
}, { underscored: true })
*/

//Tarefa.belongsTo(Caderno)
//Tarefa.belongsTo(Prioridade)
//Tarefa.belongsTo(Tarefa, { as: 'tarefa_pai' })
//Caderno.belongsTo(Caderno, { as: 'caderno_pai' })

module.exports = {
//    Prioridade,
//    Caderno,
    Tarefa,
};
