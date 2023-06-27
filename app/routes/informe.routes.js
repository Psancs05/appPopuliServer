module.exports = app => {
  const informes = require("../controllers/informe.controller.js");

  var router = require("express").Router();

  // Crea un nuevo informe
  router.post("/", informes.create);

  // Devuelve todos los informes
  router.get("/", informes.findAll);

  // Devuelve todos los informes de un usuario (o todos si es admin)
  router.get("/:id", informes.findAllByUser);

  // Convierte los informes en CSV y los devuelve
  router.get("/download/:id", informes.download);

  app.use('/api/informes', router);
};