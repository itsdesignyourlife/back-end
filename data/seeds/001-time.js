
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weekNumber').del()
    .then(function () {
      // Inserts seed entries
      return knex('weekNumber').insert([
        {weekNumber: 0},
      ]);
    });
};
