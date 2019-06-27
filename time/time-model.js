const db = require("../data/dbConfig");

module.exports = {
  find,
  update
};

function find() {
  return db("weekNumber");
}

async function update( edits) {
  await db("weekNumber")
    .update(edits);
  return db("weekNumber");
}