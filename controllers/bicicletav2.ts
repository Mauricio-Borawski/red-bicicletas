import { Bicicleta } from "../models";

exports.getBicicletas = (req, res) => {
  res.send({ bici: Bicicleta.getBicis() });
};
