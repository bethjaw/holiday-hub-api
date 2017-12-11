const db = require('./connection')

function getUsers(){
  return db('users').select()
}

function getGifts(id){
  return db('gifts').select('*').where('users_id', id)
}

function getUsersByGroup(id){
  return db('users').select('*').where('groups_id', id).innerJoin('users_groups', 'users_id', 'users.id').innerJoin('groups', 'groups_id', 'groups.id')
}



module.exports = {
  getUsers,
  getGifts,
  getUsersByGroup,
}
