const express = require("express");

const router = express.Router();
const time = require("../time/time-model");

router.get("/", restricted, (req, res) => {
  time
    .find()
    .then(time => {
      res.status(200).json(time);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", restricted, (req, res) => {
  const id = req.params.id;
  time
    .update(id, req.body)
    .then(time => {
      res.status(200).json(time);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", restricted, (req, res) => {
  const id = req.params.id;
  time
    .findById(id)
    .then(time => {
      res.status(500).json(time);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
