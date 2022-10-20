const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produto', (req, res) => {
    res.send('Listar produto')
})

app.post('/produto', (req, res) => {
    res.send('Criar produto')
})

app.put('/produto/:id', (req, res) => {
    res.send('Atualizar produto')
})

app.delete('/produto/', (req, res) => {
    res.send('Ta faltando o id ai doidin')
})
app.delete('/produto/:id', (req, res) => {
    res.send('Deletar produto '+ req.params.id)
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})