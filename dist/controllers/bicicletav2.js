"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
exports.getBicicletas = (req, res) => {
    res.send({ bici: models_1.Bicicleta.getBicis() });
};
//# sourceMappingURL=bicicletav2.js.map