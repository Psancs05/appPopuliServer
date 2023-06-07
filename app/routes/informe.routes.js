module.exports = app => {
  const informes = require("../controllers/informe.controller.js");

  var router = require("express").Router();

  // Crea un nuevo informe
  router.post("/", informes.create);

  // Devuelve todos los informes
  router.get("/", informes.findAll);

  app.use('/api/informes', router);
};