const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router.js");
const postsRouter = require("../posts/posts-router");
const homeRouter = require("../home/home-router");
const timeRouter = require("../time/time-router");
const cycleRouter = require("../cycle/cycle-router");
const weeklyRouter = require('../weekly/weekly-router')
const reflectionRouter = require('../reflections/reflection-router')

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);
server.use("/api/home", homeRouter);
server.use("/api/time", timeRouter);
server.use("/api/cycle", cycleRouter);
server.use('/api/weekly', weeklyRouter)
server.use('/api/reflections', reflectionRouter)

server.get("/", (req, res) => {
  res.json("Lambda School Build Week - June 24-28 - Design Your Life");
});


module.exports = server;
