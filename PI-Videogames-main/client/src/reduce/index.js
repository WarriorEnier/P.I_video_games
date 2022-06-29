import {GET_VIDEOGAMES,GET_GENRES, FILTER_BY_GENRES} from '../actions/index'

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
            : allVideoGames.filter(el => el.genres[0].name === action.payload);
            //:allVideoGames.filter(el => el.genres[0].includes(action.payload)) 
            
            return {
                ...state,
                videoGames:statusGenre
            }
        default:
            return {...state}
    }
}

export default rootReducer;