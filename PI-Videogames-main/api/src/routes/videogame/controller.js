const {getAllGames} = require('../llamados')
const axios = require('axios');
const {APIKEY} = process.env;

const getVideoGameId = async(req, res, next)=>{
    const {id} = req.params;
    try {
        const gamesID = await getAllGames();
        
        //const gamesIdRaw = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
        //const description_raw = gamesIdRaw.data.description_raw;
        //console.log(gamesID[0].id)
        if(id){
            let gameId = gamesID.filter(el => el.id == id) ;
            if(!!gameId[0].createdInDb){
                
                gameId.length
                    ?res.status(200).json(gameId)
                    :res.status(404).send('No se encontro un video juego con ese ID')                
            }else{
                const gamesIdRaw = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
                gameId.description_raw = gamesIdRaw.data.description_raw;
                console.log(gameId.description_raw)
                gameId.length
                    ?res.status(200).json(gameId)
                    :res.status(404).send('No se encontro un video juego con ese ID')
            }
            //console.log(!!gameId[0].createdInDb)
            //console.log(description_raw)
            //let gameId = await gamesID.findByPk(id);//devuelve null
            //gameId = [...gameId, description_raw];
            //console.log(gameId)
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