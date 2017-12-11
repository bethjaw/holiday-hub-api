
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          // id: 1,
          name: 'Beth'
        },
        {
          // id: 2,
          name: 'Megan'
        },
        {
          // id: 3,
          name: 'Anne'
        },
        {
          // id: 4,
          name: 'Mom'
        }
      ]);
    });
};
