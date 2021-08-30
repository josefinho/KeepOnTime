const express = require('express')
const app = express()
const { pegarListaTarefas, removerTarefa, editarTarefa } = require('./tarefas-repos')
const { criarTarefa } = require('./tarefas-repos')
const { syncDatabase, Tarefa } = require('./schema')


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
  criarTarefa(req.body)
  res.redirect('/')
})

app.post('/edit', (req, res) => {
  editarTarefa(req.body.id, req.body);
  res.redirect('/')
});

app.post('/delete', (req, res) => {
  let dataArr = req.body.id;

  if(typeof dataArr === 'object') {
    for(let i = 0; i < dataArr.length; i++) {
      removerTarefa(dataArr[i]);
    }
  } else {
    removerTarefa(dataArr);
  }

  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`)
})
