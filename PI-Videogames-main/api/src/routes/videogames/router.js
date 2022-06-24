const { Router } = require('express');
const router = Router();
//85286963-abe5-4dfd-98fc-74b5016c5bd9
const {
    getVideoGames,
    postVideoGames
} = require('./controller')


router.get('/', getVideoGames );
router.post('/', postVideoGames)

module.exports = router;