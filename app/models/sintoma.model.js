const sql = require("./db.js");

// constructor
const Sintoma = function(sintoma) {
  
};

Sintoma.getAll = result => {
  sql.query("SELECT * FROM sintomas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    
    console.log("sintomas: ", res);
    result(null, res);
  });
};

module.exports = Sintoma;