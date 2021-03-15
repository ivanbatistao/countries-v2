const { Router } = require('express');
// Importar todos los routers;
const countries = require("./countries")
const touristActivity = require("./touristActivity")

const router = Router();

// Configurar los routers
router.use("/", countries)
router.use("/", touristActivity)



module.exports = router;
