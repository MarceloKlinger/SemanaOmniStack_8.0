const express = require("express");
const DevControllers = require("./controllers/DevControllers");
const LikeControllers = require("./controllers/LikeControllers");
const DislikeControllers = require("./controllers/DislikeControllers");

const routes = express.Router();

routes.get('/devs', DevControllers.index)
routes.post("/devs", DevControllers.store);

routes.post("/devs/:devId/likes", LikeControllers.store);
routes.post("/devs/:devId/dislikes", DislikeControllers.store);

module.exports = routes;
