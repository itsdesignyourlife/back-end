const express = require('express')

const router = express.Router()
const weekly = require('./weekly-model')
const restricted = require('../auth/restricted')

router.get("/:id", restricted, (req, res) => {
    weekly
      .getUserReflections(req.params.id)
      .then(reflections => {
        res.status(200).json(reflections);
        console.log(reflections)
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  module.exports = router;