const express = require('express')
const router = express.Router()
const query = require('./db/queries')


router.get('/users', (req, res) => {
  query.getUsers()
  .then((userData) => {
    res.json(userData)
  })
})

router.get('/users/:id', (req, res) => {
  let id = req.params.id
  query.getUserById(id)
  .then((user) => {
    res.json(user)
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

router.get('/groupsByUser/:id', (req, res) => {
  let id = req.params.id
  query.getGroupsByUser(id)
  .then((groupData) => {
    res.json(groupData)
  })
})

router.get('/usergroupdata', (req, res) => {
  query.getUsersGroups()
  .then((usersGroups) => {
    res.json(usersGroups)
  })
})



module.exports = router
