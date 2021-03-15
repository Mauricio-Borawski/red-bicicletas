const express = require("express");
const router = express.Router();
const getBicicletas = require("../controllers/bicicletav2.ts");

router.get("/", getBicicletas);

module.exports = router;
