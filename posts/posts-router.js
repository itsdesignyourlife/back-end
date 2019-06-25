const express = require("express");

const router = express.Router();
const posts = require("./posts-model");
const restricted = require("../auth/restricted");

router.get("/", restricted, (req, res) => {
  posts
    .find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", restricted, (req, res) => {
  posts
    .add(req.body)
    .then(post => {
      res.status(200).json({message: 'Post added successfully!'});
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", restricted, (req, res) => {
  posts
    .findById(req.params.id)
    .then(post => {
      res.status(200).json(post);
      console.log(posts)
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/', restricted, (req, res) => {
    posts.update(req.params.id, req.body).then(post => {
        res.status(200).json({ message: 'Post updated successfully!'})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;
