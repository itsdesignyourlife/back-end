const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  add,
  findById,
  update,
  remove
};

function find() {
  return db("reflections");
}

function findBy(filter) {
  return db("reflections").where(filter);
}

async function add(post, id) {
  await db("reflections").insert(post);
  return db("reflections").where({ user_id: id });
}

function findById(id) {
  return db("reflections")
    .where({ id })
    .first();
}

async function update(id, edits, user_id) {
  await db("reflections")
    .where({ id })
    .update(edits);
  return db("reflections").where({ user_id: user_id });
}

function remove(id, user_id) {
  return db("reflections")
    .where({ id })
    .del();
}
