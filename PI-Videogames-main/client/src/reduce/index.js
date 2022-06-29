import {
    GET_VIDEOGAMES,
    GET_GENRES,
    FILTER_BY_GENRES,
    ORDENAMIENTO,
    FILTER_CREATED,
 } from '../actions/index'

const initialState = {
    videoGames: [],
    genres: [],
    allVideoGames:[]
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                videoGames:action.payload,
                allVideoGames:action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres:action.payload
            }
        case FILTER_BY_GENRES:
            const allVideoGames = state.allVideoGames;
            const statusGenre = action.payload === 'Todos' 
            ? allVideoGames
            :allVideoGames.filter(el => el.genres?.some(g => g.name.toLowerCase() === action.payload.toLowerCase()))
            
            return {
                ...state,
                videoGames:statusGenre
            }
        case ORDENAMIENTO:
            const orderArr = action.payload === 'asc'
            ?state.videoGames.sort((a, b) =>{
                if(a.name > b.name)return 1
                if(a.name < b.name)return -1
                return 0
            })
            :state.videoGames.sort((a, b) =>{
                if(a.name > b.name)return -1
                if(a.name < b.name)return 1
                return 0
            })
            return{
                ...state,
                videoGames:orderArr
            }
        case FILTER_CREATED:
            const allVideoGames2 = state.allVideoGames;
            const creado = action.payload === 'Creado'
            ?allVideoGames2.filter(el => el.createdInDb)
            :allVideoGames2.filter(el => !el.createdInDb);
            return{
                ...state,
                videoGames: action.payload === 'Todo'
                ? allVideoGames2
                :creado
            } 
          

        default:
            return {...state}
    }
}

export default rootReducer;