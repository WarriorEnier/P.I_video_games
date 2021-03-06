const {getAllGames} = require('../llamados');
const {Videogame, Genre} = require('../../db');

const  getVideoGames = async(req, res) =>{
    try {
        const {name} = req.query;
        const gamesTotal = await getAllGames();
        //console.log(gamesTotal[0]+ 'no hay na')
        if(name){
            let gameName = gamesTotal.filter(el => el.name.toLowerCase().includes(name.toString().toLowerCase()));
            //console.log(gameName)
            gameName.length 
                ?res.status(200).json(gameName)
                :res.status(404).send('No se encontro un video juego con ese nombre')
         
    
        }else{
            //console.log(gamesTotal.filter(el => el.id == 3498))
            console.log(gamesTotal.length)
            return res.status(200).send(gamesTotal)
        }   
    } catch (error) {
        return res.status(404).send('NO entramos en el get')
    }
}

const postVideoGames = async(req, res, next) =>{
    try {
        
        let{
            name,
            rating,
            platforms,
            release_date,
            description_raw,
            createdInDb,
            genre,
            image
        } = req.body;

        const nameTable = await getAllGames();
        if(!name || !description_raw || !platforms) return res.status(404).send('Falta un valor obligatorio')
        const result = nameTable.filter(el => el.name.toLowerCase() === name.toLowerCase())
        console.log(result.name)
        
        if(!result.length){

            const gameCreate = await Videogame.create({
                name,
                rating,
                platforms,
                release_date,
                description_raw,
                createdInDb,
                image
            })
        
            let genreDb = await Genre.findAll({where: {name:genre}})
            //console.log(genreDb)
            gameCreate.addGenre(genreDb)
            return res.send('Personaje creado con exito')
        }
        return res.send(`Personaje ${name} ya se encuentra en nuestra BD`)
    
    } catch (error) {
        next(error)
    }
}



module.exports = {
    getVideoGames,
    postVideoGames
    
}