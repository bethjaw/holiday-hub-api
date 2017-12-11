
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          // id: 1,
          name: 'Beth',
          email: 'beth@gmail.com',
          password: 'jawz13',
        },
        {
          // id: 2,
          name: 'Megan',
          email: 'megan@gmail.com',
          password: 'booRobbie',
        },
        {
          // id: 3,
          name: 'Anne',
          email: 'Anne@gmail.com',
          password: 'bernieFL',
        },
        {
          // id: 4,
          name: 'Mom',
          email: 'kathleen@gmail.com',
          password: 'havanese21314',
        }
      ]);
    });
};
