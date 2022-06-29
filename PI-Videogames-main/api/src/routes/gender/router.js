const { Router } = require('express');
const router = Router();
const {getGenre} = require('./controller')

router.get('/', getGenre);

module.exports = router;