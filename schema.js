const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './tarefas.sqlite',
});

const ModeloTarefa = {
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
    status: { type: Sequelize.BOOLEAN },
    //    cor_rgb: { type: Sequelize.STRING },
    //    repete_em_horas: { type: Sequelize.INTEGER },
    //    repete_em_dias: { type: Sequelize.INTEGER },

};
const Tarefa = sequelize.define('tarefa', ModeloTarefa, { underscored: true })

const ModeloCaderno = {
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
};
const Caderno = sequelize.define('caderno', ModeloCaderno, { underscored: true });

const ModeloPrioridade = {
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
};
const Prioridade = sequelize.define('prioridade', ModeloPrioridade, { underscored: true })

async function syncDatabase() {
    await Tarefa.sync()
    await Caderno.sync()
    await Prioridade.sync()

    Tarefa.belongsTo(Caderno)
    Tarefa.belongsTo(Prioridade)
    Tarefa.belongsTo(Tarefa, { as: 'tarefa_pai' })
    Caderno.belongsTo(Caderno, { as: 'caderno_pai' })

}

module.exports = {
    ModeloTarefa,
    ModeloCaderno,
    ModeloPrioridade,
    Tarefa,
    Caderno,
    Prioridade,
    sequelize,
    syncDatabase,
};
