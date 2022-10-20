const express = require('express');
const route = express.Router();

route.get('/produto', (req, res) => {
    res.send('Listar produto')
})

route.post('/produto', (req, res) => {
    res.send('Criar produto')
})

route.put('/produto/:id', (req, res) => {
    res.send('Atualizar produto')
})

route.delete('/produto/', (req, res) => {
    res.send('Ta faltando o id ai doidin')
})
route.delete('/produto/:id', (req, res) => {
    res.send('Deletar produto id: '+ req.params.id)
})

module.exports = route;