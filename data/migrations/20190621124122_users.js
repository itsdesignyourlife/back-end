const moment = require("moment");
const date = moment().format("MMMM Do YYYY, h:mm a");

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table
        .string("username", 128)
        .notNullable()
        .unique();
      table.string("password", 128).notNullable();
    })
    .createTable("posts", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("postTitle", 128).notNullable();
      table.string("postBody", 128).notNullable();
      table.timestamps(true, true);
      table.integer("engagementScore").notNullable();
      table.integer("energyScore").notNullable();
      //test
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("posts");
};
