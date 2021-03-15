const Bicicleta = require("../models/bicicletav3");

exports.getBicis = async (req, res) => {
  const data = await Bicicleta.getBicis();
  const result = await JSON.parse(data);
  res.send(result.test);
};
