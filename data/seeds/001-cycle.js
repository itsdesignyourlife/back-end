
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('endOfWeekCycle').del()
    .then(function () {
      // Inserts seed entries
      return knex('endOfWeekCycle').insert([
        {endOfWeekCycle: 0},
      ]);
    });
};
