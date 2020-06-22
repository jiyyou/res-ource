const subData = require('../seed_data/subs');

exports.seed = function(knex) {
  return knex('sub')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('sub').insert(subData);
    });
};
