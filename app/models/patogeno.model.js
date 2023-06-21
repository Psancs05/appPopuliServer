const sql = require("./db.js");

// constructor
const Patogeno = function(patogeno) {
  
};

Patogeno.getAll = (lang, result) => {
  if(lang == 'es'){
    sql.query("SELECT * FROM patogenos", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      console.log("patogenos: ", res);
      result(null, res);
    });
  }else if(lang == 'en'){
    sql.query("SELECT * FROM patogenos_en", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      console.log("patogenos: ", res);
      result(null, res);
    });
  }
};

Patogeno.getByIdS = (id_sintoma, lang, result) => {
  if(lang == 'es'){
    sql.query("SELECT * FROM patogenos WHERE id_sintoma = ?", id_sintoma, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      console.log("patogenos: ", res);
      result(null, res);
    });
  }else if(lang == 'en'){
    sql.query("SELECT * FROM patogenos_en WHERE id_sintoma = ?", id_sintoma, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      console.log("patogenos: ", res);
      result(null, res);
    });
  } 
};


module.exports = Patogeno;