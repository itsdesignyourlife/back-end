const express = require("express");
const router = express.Router();
const reflections = require("./reflection-model");
const restricted = require("../auth/restricted");

router.get("/", restricted, (req, res) => {
  reflections
    .find()
    .then(reflections => {
      res.status(200).json(reflections);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", restricted, (req, res) => {
  const {
    user_id,
    postTime,
    postDate,
    postTitle,
    postBody,
  } = req.body;
  reflections
    .add(req.body, user_id)
    .then(reflections => {
      if (
        !user_id ||
        !postTime ||
        !postDate ||
        !postTitle ||
        !postBody 
      ) {
        res.status(400).json({ message: "Missing required field(s)" });
      } else {
        res
          .status(200)
          .json({ message: "Reflection added successfully!", reflections });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", restricted, (req, res) => {
  reflections
    .findById(req.params.id)
    .then(post => {
      res.status(200).json(post);
      //   console.log("reflections", reflections);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", restricted, (req, res) => {
  const {
    user_id,
    postTime,
    postDate,
    postTitle,
    postBody,
  } = req.body;
  const id = req.params.id;
  reflections
    .update(id, req.body, user_id)
    .then(reflections => {
      if (
        !user_id ||
        !postTime ||
        !postDate ||
        !postTitle ||
        !postBody 
      ) {
        res.status(400).json({ message: "Missing required field(s)" });
      } else {
        res
          .status(200)
          .json({ message: "Reflection updated successfully!", reflections });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", restricted, (req, res) => {
  const id = req.params.id;
  const { user_id } = req.body;
  reflections
    .remove(id, user_id)
    .then(() => {
      res
        .status(200)
        .json({ message: "Reflection removed successfully" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
