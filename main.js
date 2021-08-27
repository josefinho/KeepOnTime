const express = require('express')
const app = express()
const { pegarListaTarefas } = require('./tarefas-repos')
const { criarTarefa } = require('./tarefas-repos')
const { syncDatabase } = require('./schema')


const port = 3000

syncDatabase();


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.get('/', async (req, res) => {
  tarefas = []
  listaTarefas = await pegarListaTarefas()
  listaTarefas.forEach(element => {
    tarefas.push(element);
  });

  res.render('index', {
    tarefas: tarefas
  })
})

app.post('/', (req, res) => {
  console.log(criarTarefa(req.body))
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`)
})
