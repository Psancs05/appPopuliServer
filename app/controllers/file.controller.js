const uploadFile = require("../middleware/upload");
const fs = require("fs");
const baseUrl = "https://test.apppopuli.es/api/files";

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "El archivo '" + req.file.originalname + "' se ha enviado correctamente",
    });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "El tamaño del archivo no puede ser superior a 2 MB",
      });
    }

    res.status(500).send({
      message: `El archivo no se ha podido enviar correctamente: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  let language = req.params.lang;
  const directoryPath = __basedir + "/resources/informes/" + language + "/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Error al escanear en busca de archivos",
      });
    }

    let fileInfos = [];

    try{
      files.forEach((file) => {
        fileInfos.push({
          name: file,
          // url: baseUrl + "/" + language + "/" + file + "_" + language + ".pdf",
          url: baseUrl + file,
        });
      });
    }
    catch(err){
      console.log(err);
      res.status(500).send({
        message: "Error al escanear en busca de archivos",
      });
    }


    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const language = req.params.lang;
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/patogenos/pdf/" + language + "/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

const show = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/patogenos/images/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
  show,
};
