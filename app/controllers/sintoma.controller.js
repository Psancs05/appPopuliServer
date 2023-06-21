const Sintoma = require("../models/sintoma.model.js");

// Devuelve todos los sintomas de la base de datos
exports.findAll = (req, res) => {
  const lang = req.params.lang;
  Sintoma.getAll(lang, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sintomas."
      });
    else{
      res.send(data);
    }
  });
};