const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req,res) => {
    res.status(404).send("{message: Não encontrei nenhuma rota}")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})