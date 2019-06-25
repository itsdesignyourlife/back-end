const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  add,
  getUserPosts,
  findById,
  update,
  getSinglePost
};

function find() {
  return db("posts");
}

function findBy(filter) {
  return db("posts").where(filter);
}

async function add(user) {
  await db("users").insert(user);

  return user;
}

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}
function getUserPosts(id) {
  return db("posts").where({ user_id: id });
}

function update(id, edits) {
  return db("boards")
    .where({ id })
    .update(edits);
}

function getSinglePost(id) {
  return db("boards")
    .where({ id })
    .first();
}
