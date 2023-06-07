const users = require("../controllers/user.controller.js");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Crea un nuevo usuario
  app.post("/api/users/create", users.create);

  // Inicia sesión con un usuario
  app.post("/api/users/login", users.login);
};