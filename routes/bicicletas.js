const express = require('express');
const router = express.Router();
const bicicletaController = require('../controllers/bicicleta');

router.get("/", bicicletaController.bicicleta_list);

module.exports = router;