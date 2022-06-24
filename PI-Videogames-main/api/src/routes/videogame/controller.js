const {getAllGames} = require('../llamados')

const getVideoGameId = async(req, res, next)=>{
    const {id} = req.params;
    try {
        const gamesID = await getAllGames();
        console.log(gamesID[0].id)
        if(id){
            let gameId = gamesID.filter(el => el.id == id) ;
            
            gameId.length
                ?res.status(200).json(gameId)
                :res.status(404).send('No se encontro un video juego con ese ID')
            /* gameName.length
                ?res.status(200).json(gameName)
                :res.status(404).send('No se encontro un ID') */
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getVideoGameId
}