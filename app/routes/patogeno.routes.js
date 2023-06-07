module.exports = app => {
  const patogenos = require("../controllers/patogeno.controller.js");

  var router = require("express").Router();

  // Devuelve todos los patogenos
  router.get("/", patogenos.findAll);

  // Devuelve todos los patogenos con el id_sintoma
  router.get("/:id_sintoma", patogenos.find)

  app.use('/api/patogenos', router);
};