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
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", restricted, (req, res) => {
  posts
    .getUserPosts(req.params.id)
    .then(posts => {
      res.status(200).json(posts);
      console.log(posts)
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/', (req, res) => {
    posts.update(req.paramds.id, req.body).then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;
