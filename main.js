const express = require('express')
const app = express()
const { pegarListaTarefas, removerTarefa, editarTarefa } = require('./tarefas-repos')
const { criarTarefa } = require('./tarefas-repos')
const { pegarListaCadernos, criarCaderno, removerCaderno } = require('./cadernos-repos')
const { syncDatabase, Tarefa } = require('./schema')


const port = 3000

syncDatabase();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.get('/', async (req, res) => {
  tarefas = []
  cadernos = []

  listaTarefas = await pegarListaTarefas()
  listaTarefas.forEach(element => {
    tarefas.push(element);
  });

  listaCadernos = await pegarListaCadernos()
  listaCadernos.forEach(element => {
    cadernos.push(element);
  });

  res.render('index', {
    tarefas: tarefas,
    cadernos: cadernos,
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

app.post('/create-caderno', (req, res) => {
  console.log(req.body)

  criarCaderno(req.body);
  res.redirect('/')
})

app.post('/delete-caderno', (req, res) => {
  let dataArr = req.body.id;
  console.log(req.body.id)
  if(typeof dataArr === 'object') {
    for(let i = 0; i < dataArr.length; i++) {
      removerCaderno(dataArr[i]);
    }
  } else {
    removerCaderno(dataArr);
  }

  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`)
})
