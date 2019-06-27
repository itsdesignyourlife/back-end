const db = require('../data/dbConfig')

module.exports = {
    find, 
    update
}

function find() {
    return db("endOfWeekCycle");
  }
  
  async function update(id, edits) {
    await db("endOfWeekCycle")
      .update(edits);
    return db("endOfWeekCycle");
  }
