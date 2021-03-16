const express = require('express');
const router = express.Router();
const bicicletaController = require("../controllers/bicicletav3");

router.get("/", bicicletaController.getBicis);
router.post("/:bici/create", bicicletaController.addBici);

module.exports = router;