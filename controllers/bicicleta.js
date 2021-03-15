const Bicicleta = require("../models/bicicleta.js");

exports.bicicleta_list = (req, res) => {
  res.render("bicicletas/index",{bicis: Bicicleta.allBicis})
}