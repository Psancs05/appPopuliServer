const sql = require("./db.js");

// constructor
const Informe = function(informe) {
  this.patogeno = informe.patogeno;
  this.fecha = informe.fecha;
  this.localizacion = informe.localizacion;
  this.lat = informe.lat;
  this.lng = informe.lng;
  this.extension_arboles = informe.extension_arboles;
  this.extension_pies = informe.extension_pies;
  this.severidad = informe.severidad;
  this.observaciones = informe.observaciones;
  this.contacto = informe.contacto;
};

Informe.create = (newInforme, result) => {
  sql.query("INSERT INTO informes SET ?", newInforme, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("informe creado: ", { id: res.insertId, ...newInforme });
    result(null, { id: res.insertId, ...newInforme });
  });
};

Informe.getAll = result => {
  sql.query("SELECT * FROM informes", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    
    console.log("informes: ", res);
    result(null, res);
  });
};

module.exports = Informe;