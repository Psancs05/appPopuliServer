const Patogeno = require("../models/patogeno.model.js");

// Devuelve todos los patogenos de la base de datos
exports.findAll = (req, res) => {
  Patogeno.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving patogenos."
      });
    else res.send(data);
  });
};

// Devuelve todos los patogenos que tengan la clave foranea
exports.find = (req, res) => {
  Patogeno.getByIdS(req.params.id_sintoma, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving patogenos."
      });
    else res.send(data);
  });
};