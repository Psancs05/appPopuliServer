const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
global.__basedir = __dirname;
const path = __dirname + '/app/views/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./app/routes/informe.routes.js")(app);
require("./app/routes/patogeno.routes.js")(app);
require("./app/routes/sintoma.routes.js")(app);
require("./app/routes/file.routes.js")(app);
require("./app/routes/user.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
