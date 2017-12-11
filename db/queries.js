const db = require('./connection')

function getUsers(){
  return db('users').select()
}

function getGifts(id){
  return db('gifts').select('*').where('users_id', id)
}

module.exports = {
  getUsers,
  getGifts,
}
