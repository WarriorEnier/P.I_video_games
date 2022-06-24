const { Router } = require('express');
//const axios = require('axios');
//const Videogame = require('../models/Videogame');
//const Gender = require('../models/Gender');
//const {Videogame, Gender} = require('../db')
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
/* const getApiGames = async()=>{
    try {
        
        //const gameUrl = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`);
        const gameUrl = await axios.get('https://api.rawg.io/api/games?key=a6b2b8aa89d9489f9692a47d249a5b6c&page_size=20&page=5')
        const apiGame = await gameUrl.data?.results.map(el => {
            return {
                id:el.id,
                name:el.name,
                rating:el.rating,
                platforms:el.platforms.map(el => el.platform.name),
                release_date:el.platforms.map(el => el.released_at)
                
            }
        }) */
            /* return{
                name:el.name,
                rating:el.results.rating,
                platforms:el.platforms.map(el => el.name),
                //release_date:el.platforms.map(el => el.released_at)
            }
        }); */
/*         return apiGame;
    } catch (error) {
        return new Error(error + 'error en la API')
    }
} */

/* const getMyDb = async() => {
    return await Videogame.findAll({
        include:{
            model:Gender,
            attributes:['name'],
            through:{
                attributes:[],
            }
        }
    })
}

const getAllGames = async()=>{
    try {
        const apiInfo = await getApiGames();
        const dbInfo = await getMyDb();
        const infoAll = apiInfo.concat(dbInfo);
        return infoAll;
        //const [apiInfo, dbInfo] = await Promise.all([getApiGames(), getMyDb()])
        //return [...apiInfo, ...dbInfo]
        
    } catch (error) {
        return new Error(error +'No entramos en el getAllGames')
    }
} */
/* router.get('/videogames', async(req, res) =>{
    try {
        const {name} = req.query;
        const gamesTotal = await getAllGames();
        if(name){
            let gameName = gamesTotal.filter(el => el.name.toLowerCase().includes(name.toString().toLowerCase()));
            gameName.length 
                ?res.status(200).json(gameName)
                :res.status(404).send('No se encontro un video juego con ese nombre')
         
    
        }else{
            console.log(gamesTotal.length)
            res.status(200).send(gamesTotal)
        }   
    } catch (error) {
        res.status(404).send('NO entramos en el get')
    }
}); */



/* router.get('/videogame/:id', async(req, res, next)=>{
    const {id} = req.params;
    try {
        const gamesID = await getApiGames();
        console.log(gamesID[0].id)
        if(id){
            let gameId = gamesID.filter(el => el.id == id) ;
            
            gameId.length
                ?res.status(200).json(gameId)
                :res.status(404).send('No se encontro un video juego con ese ID') */
            /* gameName.length
                ?res.status(200).json(gameName)
                :res.status(404).send('No se encontro un ID') */
/*         }
    } catch (error) {
        next(error)
    }
}); */

/* router.post('/videogames', async(req, res, next) =>{
    try {
        
        let{
            name,
            rating,
            platforms,
            release_date,
            description,
            createdInDb,
            genre
        } = req.body;
    
        const gameCreate = await Videogame.create({
            name,
            rating,
            platforms,
            release_date,
            description,
            createdInDb
        })
    
        let genreDb = await Gender.findAll({where: {name:genre}})
        gameCreate.addGender(genreDb)
        res.send('Personaje creado con exito')
    
    } catch (error) {
        next(error)
    }
})

router.get('/genres', async(req, res, next)=>{
    try {
        const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
        const genres = apiGenres.data.results.map(el => el.name);
        genres.forEach(el =>{
            Gender.findOrCreate({
                where:{name:el}
            })
        })

        const allGenresMyDb = await Gender.findAll();
        res.status(200).send(allGenresMyDb)

    } catch (error) {
        next(error);
    }
});
 */