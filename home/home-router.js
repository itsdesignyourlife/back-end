const express = require('express')

const router = express.Router()
const home = require('./home-model')
const restricted = require('../auth/restricted')

router.get("/:id", restricted, (req, res) => {
    home
      .getUserPosts(req.params.id)
      .then(posts => {
        res.status(200).json(posts);
        console.log(posts)
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  module.exports = router;