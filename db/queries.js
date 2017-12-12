const db = require('./connection')

function getUsers(){
  return db('users').select()
}

function getUserById(id){
  return db('users').select().where('id', id)
}

function getGifts(id){
  return db('gifts').select('*').where('users_id', id)
}

function getUsersByGroup(id){
  return db('users').select('*').where('groups_id', id).innerJoin('users_groups', 'users_id', 'users.id').innerJoin('groups', 'groups_id', 'groups.id')
}

function getGroupsByUser(id){
  return db('groups').select('*').where('users_id', id).innerJoin('users_groups', 'groups_id', 'groups.id').innerJoin('users', 'users_id', 'users.id')
}


module.exports = {
  getUsers,
  getUserById,
  getGifts,
  getUsersByGroup,
  getGroupsByUser,
}
