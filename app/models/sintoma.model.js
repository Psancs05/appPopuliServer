const sql = require("./db.js");

// constructor
const Sintoma = function(sintoma) {
  
};

// Devuelve todos los sintomas y recibe por parametro el idioma
Sintoma.getAll = (lang, result) => {
  if(lang == 'es'){
    sql.query("SELECT * FROM sintomas", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      console.log("sintomas: ", res);
      result(null, res);
    });
  }else if(lang == 'en'){
    sql.query("SELECT * FROM sintomas_en", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      console.log("sintomas: ", res);
      result(null, res);
    });
  }
};

module.exports = Sintoma;