const db = require("../data/dbConfig");

module.exports = {
  getUserPosts,
};

function getUserPosts(id) {
    return db("posts").where({ user_id: id });
  }