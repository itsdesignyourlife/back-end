const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  add
};

function find() {
  return db("posts")
}

function findBy(filter) {
  return db("posts").where(filter);
}

async function add(post) {
  const [id] = await db("posts").insert(post);

  return findById(id);
}

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}
