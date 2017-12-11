const express = require('express')
const router = express.Router()
const query = require('./db/queries')


router.get('/users', (req, res) => {
  query.getUsers()
  .then((userData) => {
    res.json(userData)
  })
})

router.get('/gifts/:id', (req, res) => {
  let id = req.params.id
  query.getGifts(id)
  .then((giftData) => {
    res.json(giftData)
  })
})

router.get('/userByGroup/:id', (req, res) => {
  let id = req.params.id
  query.getUsersByGroup(id)
  .then((userByGroup) => {
    res.json(userByGroup)
  })
})



module.exports = router
