const sequelize = require('./create_db')

// Testando o banco de dados
sequelize.authenticate().then(() => {
    console.log('Acessando arquivo do sqlite');
}).catch(err => {
    console.error('Não foi possível acessar o sqlite: ', err);
});


// Sincronizando o schema com o banco real
const tabelas = require('./schema')

tabelas.Caderno.sync().then(() => {
    return tabelas.Caderno.create({
        id: 1,
        nome: 'Caderno Padrão',
        descricao: 'Caderno padrão',
    })
})
tabelas.Prioridade.sync()
tabelas.Tarefa.sync()