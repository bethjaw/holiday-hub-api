const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000
const routes = require('./routes')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', routes)


app.listen(port, (req, res) => {
  console.log('listeningggg', port);
})
