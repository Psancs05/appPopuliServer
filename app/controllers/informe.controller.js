const Informe = require("../models/informe.model.js");

// Crea y almacena un nuevo informe
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log('req.body: ', req.body);

  // Crea un informe
  const informe = new Informe({
    patogeno: req.body.patogeno,
    fecha: req.body.fecha,
    localizacion: req.body.localizacion,
    lat: req.body.lat,
    lng: req.body.lng,
    extension_arboles: req.body.extension_arboles,
    extension_pies: req.body.extension_pies,
    severidad: req.body.severidad,
    observaciones: req.body.observaciones,
    contacto: req.body.contacto,
    isPublic: req.body.isPublic,
    userId: req.body.userId
  });

  // Save Tutorial in the database
  Informe.create(informe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Informe."
      });
    else res.send(data);
  });
};

// Retrieve all Informes from the database
exports.findAll = (req, res) => {
  Informe.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving informes."
      });
    else res.send(data);
  });
};

exports.findAllByUser = (req, res) => {
  Informe.getAllByUser(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving informes."
      });
    else res.send(data);
  });
}

exports.download = (req, res) => {
  console.log('req.params.id download: ', req.params.id);
  Informe.getAllByUser(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving informes."
      });
    else {
      Informe.convertToCSV(data, res);
    }
  });   
}