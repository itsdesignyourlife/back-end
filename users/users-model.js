const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  add
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  await db("users").insert(user);

  return user;
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
