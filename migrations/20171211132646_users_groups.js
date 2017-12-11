
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users_groups', (table) => {
      table.increments()
      table.integer('users_id')
      table.integer('groups_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users_groups')
  ])
};
