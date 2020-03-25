const express = require('express')
const port = 3000
const host = '0.0.0.0'

const app = express();
app.get('/', (req, res)=> {
  res.send('<h1>Teste docker com node </h1>')
})

app.listen(port, host)