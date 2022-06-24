const {Videogame, Gender} = require('../db')
const axios = require('axios');


const {APIKEY} = process.env;

const getApiGames = async()=>{
    try {
        let games = [];
			let address = '';
			while (games.length < 100) {
				!games.length && (address = `https://api.rawg.io/api/games?key=${APIKEY}`);
				let { data } = await axios.get(address);
				games = [...games, ...data.results];
				address = data.next;
			}
     
        let apiGame = games.map(el => {
            return {
                id:el.id,
                name:el.name,
                rating:el.rating,
                platforms:el.platforms.map(el => el.platform.name),
                release_date:el.platforms.map(el => el.released_at),
                
            }
        })
        
        return apiGame;
    } catch (error) {
        return new Error(error + 'error en la API')
    }
}

const getMyDb = async() => {
    
    try {
        
        const db =  await Videogame.findAll({
            include:{
                model:Gender,
                attributes:['name'],
                through:{
                    attributes:[],
                }
            }
        })
        
        return db;
    } catch (error) {
        return new Error(error + 'error en la BD')
    }
}

const getAllGames = async()=>{
    try {
        
        const apiInfo = await getApiGames();
        const dbInfo = await getMyDb();
        //const infoAll = apiInfo.concat(dbInfo);
        const infoAll = [...apiInfo, ...dbInfo];
        return infoAll;
        //const [apiInfo, dbInfo] = await Promise.all([getApiGames(), getMyDb()])
        //return [...apiInfo, ...dbInfo]
        
    } catch (error) {
        return new Error(error +'No entramos en el getAllGames')
    }
}

/* const getApiGamesGender = async()=>{
    try{
        return axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`)
    }catch(error){
        return new Error(error + ' No entramos en getApiGamesGender')
    }
} */

module.exports = {
    getAllGames
}