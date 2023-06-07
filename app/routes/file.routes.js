const express = require("express");
const router = express.Router();
const controller = require("../controllers/file.controller.js");

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);
  router.get("/images/:name", controller.show);
  
  app.use('/api', router);
};

module.exports = routes;