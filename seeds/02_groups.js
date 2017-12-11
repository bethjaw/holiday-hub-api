
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {
          // id: 1,
          group_name: 'Jaworski Plus One'
        },
        {
          // id: 2,
          group_name: 'Balk Bunch'
        },

      ]);
    });
};
