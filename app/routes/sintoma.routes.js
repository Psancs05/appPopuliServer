module.exports = app => {
  const sintomas = require("../controllers/sintoma.controller.js");

  var router = require("express").Router();

  // Devuelve todos los sintomas
  router.get("/:lang", sintomas.findAll);


  app.use('/api/sintomas/', router);
};