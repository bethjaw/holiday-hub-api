const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, (req, res) => {
  console.log('listeningggg', port);
})
