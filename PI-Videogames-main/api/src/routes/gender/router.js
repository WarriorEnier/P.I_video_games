const { Router } = require('express');
const router = Router();
const {getGender} = require('./controller')

router.get('/', getGender);

module.exports = router;