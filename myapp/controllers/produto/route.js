const express = require('require')

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
    res.send('Deletar produto id: '+ req.params.id)
})

app.use((req,res) => {
    res.status(404).send("{message: Não encontrei nenhuma rota}")
})