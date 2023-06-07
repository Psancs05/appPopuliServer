const sql = require("./db.js");

// constructor
const Patogeno = function(patogeno) {
  
};

Patogeno.getAll = result => {
  sql.query("SELECT * FROM patogenos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    
    console.log("patogenos: ", res);
    result(null, res);
  });
};

Patogeno.getByIdS = (id_sintoma, result) => {
  sql.query("SELECT * FROM patogenos WHERE id_sintoma = ?", id_sintoma, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    
    console.log("patogenos: ", res);
    result(null, res);
  });
};

module.exports = Patogeno;