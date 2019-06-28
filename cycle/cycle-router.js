const express = require("express");

const router = express.Router();
const cycle = require("../cycle/cycle-model");

router.get("/", (req, res) => {
  cycle
    .find()
    .then(cycle => {
      res.status(200).json(cycle);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  cycle
    .findById(req.params.id)
    .then(cycle => {
      res.status(200).json(cycle);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.options('/:id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
  });

router.put("/:id", (req, res) => {
  const id = req.params.id;
  cycle
    .update(id, req.body)
    .then(cycle => {
      res.status(200).json(cycle);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;
