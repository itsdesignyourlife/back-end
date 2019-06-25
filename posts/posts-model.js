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
  return db("posts");
}

function findBy(filter) {
  return db("posts").where(filter);
}

async function add(post) {
  await db("posts").insert(post);
  return post;
}

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}

function update(id, edits) {
  return db("posts")
    .where({ id })
    .update(edits);
}
function remove(id) {
  return db("posts")
    .where({ id })
    .del();
}
