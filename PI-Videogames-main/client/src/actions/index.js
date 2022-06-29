import axios from 'axios';
export const GET_VIDEOGAMES = 'OBTENER VIDEOJUEGOS'
export const GET_GENRES = 'OBTENER GENEROS'
export const FILTER_BY_GENRES = 'FILTRAR POR GENERO'
export const FILTER_CREATED = 'FILTRAR POR CREADO'
export const ORDENAMIENTO = 'ORDENAMIENTO ASC DES'
const URL_VIDEOGAMES = 'http://localhost:3001/videogames';
const URL_GENRES = 'http://localhost:3001/genres';

export const getVideoGames=()=>{
    return async function(dispatch){
        let json = await axios.get(URL_VIDEOGAMES);
        
        return dispatch({
            
            type: GET_VIDEOGAMES,
            payload:json.data
        })
    }
}

export const getGenres=()=>{
    return async function(dispatch){
        const genero = await axios.get(URL_GENRES);
        //console.log(json.data)
        return dispatch({
            
            type: GET_GENRES,
            payload:genero.data
        })
    }
}

export const filterByGenres=(payload)=>{
    return{
        type: FILTER_BY_GENRES,
        payload
    }
    
}

export const filterByOrdenamiento = (payload) =>{
    return {
        type: ORDENAMIENTO,
        payload
    }
}

export const filterCreated = (payload) =>{
    return {
        type: FILTER_CREATED,
        payload
    }
}