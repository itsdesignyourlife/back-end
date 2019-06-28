const db = require("../data/dbConfig");

module.exports = {
  getUserReflections,
};

function getUserReflections(id) {
    return db("reflections").where({ user_id: id });
  }