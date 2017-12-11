
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('gifts', (table) => {
      table.increments()
      table.string('name')
      table.string('url')
      table.integer('users_id')
      table.text('notes')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('gifts')
  ])
};
