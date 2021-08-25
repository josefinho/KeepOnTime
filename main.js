const express = require('express')
const app = express()
const fs = require('fs')

const port = 3000

const tarefas = 
  JSON.parse(fs.readFileSync('tarefas.json'))

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.get('/', (req, res) => {

  res.render('index', {
    tarefas: tarefas
  })
})

app.post('/', (req, res) => {
  tarefas.push(req.body)

  res.redirect('/')

setTimeout(() => {
  fs.writeFile('tarefas.json', JSON.stringify(tarefas, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
}, 1000)

})

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`)
})
