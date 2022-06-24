const { Router } = require('express');
const videogames = require('../routes/videogames/router');
const gender = require('../routes/gender/router');
const videogame = require('../routes/videogame/router');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
router.use('/videogames',videogames);
router.use('/videogame', videogame)
router.use('/genres', gender)
