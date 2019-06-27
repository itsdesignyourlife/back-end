const db = require("../data/dbConfig");

module.exports = {
  find,
  update,
  findById
};

function find() {
  return db("weekNumber");
}

async function update(edits) {
  await db("weekNumber").update(edits);
  return db("weekNumber");
}

async function update(id, edits) {
    await db("weekNumber")
      .where({ id })
      .update(edits);
    return db("weekNumber").where({ id });
  }

async function findById(id) {
  return await db("weekNumber")
    .where({ id: id })
    .first();
}