const User = require("../models/user.model.js");
const config = require("../config/auth.config.js");

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

// Crea y almacena un nuevo usuario
exports.create = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Crea un usuario
  const user = new User({
    contact: req.body.contact,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  // Comprueba que el usuario existe en la base de datos
  User.findByContact(req.body.contact, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {

        // Guarda el Usuario en la base de datos
        User.create(user, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Error al crear el usuario."
            });
          else res.send(data);
        });

      } else {
        res.status(500).send({
          message: "Error al buscar el usuario " + req.body.contact
        });
      }
    } else {
      res.status(404).send(`Ya existe el usuario '${req.body.contact}'.`);
    }
  })

};

// Inicia sesion
exports.login = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Comprueba que existe un usuario con esa password
  User.findByContact(req.body.contact, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {

        res.status(404).send(`No existe el usuario '${req.body.contact}'.`);

      } else {
        res.status(500).send({
          message: "Error al buscar el usuario " + req.body.contact
        });
      }
    } else {
      // Existe un usuario con ese email
      // esto de aca me devuelve la contraseña, ergo se compara
      // lo que me ha dado con la password dada por el usuario mediante el metodo
      // bcrypt.compareSync(tal)
      // asi que no hace falta el metodo find user, vale el find by email
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        data.password
      );

      if (!passwordIsValid) {
        return res.status(401).send("Contraseña incorrecta.");
      }

      // Existe un usuario con ese email Y ESA CONTRASEÑA
      var token = jwt.sign(data.id, config.secret);

      res.status(200).send({
        id: data.id,
        contact: data.contact,
        accessToken: token
      });
    }

  })

}