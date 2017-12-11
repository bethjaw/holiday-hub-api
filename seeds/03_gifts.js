
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('gifts').insert([
        {
          id: 1,
          name: 'Soda Steam',
          url: 'https://www.sodastreamusa.com/sodastream-jet-starter-kit-p149.aspx',
          users_id: 4,
          notes: 'Just for making sparkling water!'
        },
        {
          id: 2,
          name: 'UGG Abela Slipper',
          url: 'https://www.ugg.com/womens-slippers/abela-slipper/1017548.html?dwvar_1017548_color=NAT#start=37&cgid=womens-slippers',
          users_id: 3,
          notes: 'Florida plus new baby slippers!'
        },
        {
          id: 3,
          name: 'basic round Belgian waffle maker!',
          url: '',
          users_id: 1 ,
          notes: ''
        }
      ]);
    });
};
