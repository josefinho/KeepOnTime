const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './tarefas.sqlite',
})

module.exports = sequelize