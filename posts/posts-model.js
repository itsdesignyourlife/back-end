const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  add,
  findById,
  update,
  remove
};

function getUserPosts(id) {
  return db("posts").where({ user_id: id });
}

function find() {
  return db("posts");
}

function findBy(filter) {
  return db("posts").where(filter);
}

async function add(post, id) {
  await db("posts").insert(post);
  return db("posts").where({ user_id: id });
}

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}

async function update(id, edits, user_id) {
  await db("posts")
    .where({ id })
    .update(edits);
  return db("posts").where({ user_id: user_id });
}

async function remove(id, user_id) {
  await db("posts")
    .where({ id })
    .del();
  return db("posts").where({ user_id: user_id });
}
