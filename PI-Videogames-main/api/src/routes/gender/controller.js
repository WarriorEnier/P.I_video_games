const axios = require('axios');
const {Videogame, Gender} = require('../../db');
const {APIKEY} = process.env;

const getGender = async(req, res, next)=>{
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
}

module.exports = {getGender}