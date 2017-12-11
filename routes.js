const express = require('express')
const router = express.Router()
const query = require('./db/queries')


router.get('/users', (req, res) => {
  query.getUsers()
  .then((userData) => {
    res.json()
  })
})



module.exports = router
