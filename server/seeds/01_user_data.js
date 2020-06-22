const userData = require('../seed_data/users');

exports.seed = function(knex) {
  return knex('user')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert(userData);
    });
};
