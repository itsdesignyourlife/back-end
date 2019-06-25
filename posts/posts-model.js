const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  add,
  getUserPosts,
  findById
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
function getUserPosts(id) {
  return db("posts").where({ user_id: id });
}
