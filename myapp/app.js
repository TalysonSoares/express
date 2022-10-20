const express = require('express')
const app = express()
const port = 3000

const produtoRota = require("./controllers/produto/router")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

app.use('/', produtoRota)

app.use((req,res) => {
    res.status(404).send("{message: Não encontrei nenhuma rota}")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})