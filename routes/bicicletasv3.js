const express = require('express');
const router = express.Router();
const bicicletaController = require("../controllers/bicicletav3");

router.get("/", bicicletaController.getBicis);

module.exports = router;