const axios = require('axios');
const {Videogame, Genre} = require('../../db');
const {APIKEY} = process.env;

const getGenre = async(req, res, next)=>{
    try {
        const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
        const genres = apiGenres.data.results.map(el => el.name);
        genres.forEach(el =>{
            Genre.findOrCreate({
                where:{name:el}
            })
        })
        const allGenresMyDb = await Genre.findAll();
        res.status(200).send(allGenresMyDb)

    } catch (error) {
        next(error);
    }
}

module.exports = {getGenre}