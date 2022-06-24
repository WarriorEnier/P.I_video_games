const {Router} = require('express')
const router = Router();

const {getVideoGameId} = require('./controller')

router.get('/:id', getVideoGameId)

module.exports = router;