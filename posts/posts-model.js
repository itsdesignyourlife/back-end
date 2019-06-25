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

 function add(post) {
  return db("posts").insert(post).then(([id]) => findById(id))
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
