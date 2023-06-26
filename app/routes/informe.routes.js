module.exports = app => {
  const informes = require("../controllers/informe.controller.js");

  var router = require("express").Router();

  // Crea un nuevo informe
  router.post("/", informes.create);

  // Devuelve todos los informes
  router.get("/", informes.findAll);

  // Devuelve todos los informes de un usuario (o todos si es admin)
  router.get("/:id", informes.findAllByUser);

  app.use('/api/informes', router);
};