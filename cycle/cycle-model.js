const db = require("../data/dbConfig");

module.exports = {
  find,
  update,
  findById
};

function find() {
  return db("endOfWeekCycle");
}

async function update(id, edits) {
    await db("endOfWeekCycle")
      .where({ id })
      .update(edits);
    return db("endOfWeekCycle").where({ id });
  }

function findById(id) {
  return db("endOfWeekCycle")
    .where({ id })
    .first();
}
