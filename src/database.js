import Sequelize, { UUID, UUIDV4, STRING, TEXT, DATE, NOW, INTEGER, CHAR } from 'sequelize';
import { serialize } from 'v8';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './tarefas.sqlite',
})

const mTarefa = db.define('tarefa', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: STRING,
        allowNull: false
    },
    descricao: { type: TEXT },
    prazo: { type: DATE },
    data_criacao: { type: DATE, default: NOW() },
    data_conclusao: { type: DATE },
    cor_rgb: { type: STRING },
    repete_em_horas: { type: INTEGER },
    repete_em_dias: { type: INTEGER },

}, { underscored: true })

const mCaderno = db.define('caderno', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: STRING,
        allowNull: false,
    },
    descricao: {
        type: TEXT,
        allowNull: true,
    },
}, { underscored: true })

const mPrioridade = db.define('prioridade', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: TEXT,
        allowNull: true,
    },
    sigla: { type: CHAR(2)}
}, { underscored: true })

mTarefa.belongsTo(mCaderno)
mTarefa.belongsTo(mPrioridade)
mTarefa.belongsTo(mTarefa, { as: 'tarefa_pai' })
mCaderno.belongsTo(mCaderno, { as: 'caderno_pai' })

function databaseSync() {
    sequelize.sync({ alter: true});
}

export default {
    mPrioridade,
    mCaderno,
    mTarefa,
    databaseSync,
};