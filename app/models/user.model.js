const sql = require("./db.js");

// constructor
const User = function(user) {
  this.contact = user.contact;
  this.password = user.password;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("usuario creado: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findByContact = (contact, result) => {
  sql.query("SELECT * FROM users WHERE contact = ?", contact, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("usuario encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }
    // no se ha encontrado el usuario
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;