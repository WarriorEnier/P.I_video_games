import React from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getVideoGames, getGenres} from '../actions/index';
import {Link} from 'react-router-dom'
import Card from "./Card";
import Gender from "./Gender";
import Paginado from "./Paginado";

export default function Home(){
    //mapDispatchToProps
    const dispatch = useDispatch();
    //mapStateToProps
    const allVideoGames = useSelector((state) => state.videoGames)
   
    //console.log(allGenres[0].name+ ' hola')
    //paginado
    const [currentPage, setCurrentPage] = useState(1)

    //cantidad de videojuegos por pagina
    const [videoGamePerPage, setVideGamesPerPage] = useState(15)
    const indiceLastVideoGame = currentPage * videoGamePerPage;
    const indiceFirstVideoGame = indiceLastVideoGame - videoGamePerPage
    const currentVideoGames = allVideoGames.slice(indiceFirstVideoGame, indiceLastVideoGame)

   
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    //componentDidMount
    useEffect(()=>{
        dispatch(getVideoGames());
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getVideoGames());
    }
    
    return(
        <div>
            <Link to = '/videogame'>Crear Video Juego</Link>
            <h1>VIDEOGAMES</h1>
            <button onClick={e=>{handleClick(e)}}>Mostrar VideoGames</button>
            <div>
                <select name="" id="">
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>

                

                    <Gender />       
                
                    {/* <select onChange={event => filterGenero(event)}> */}
                    {/* {generos.map((e,i) => {return(
                    <option value={e.name} key={i}> {e.name}
                     </option>)})}                                       
                    </select> */}
                    {/* <option value="act">Action</option>
                    <option value="ave">Aventura</option> */}
                
                <select name="" id="">
                    <option value="all">Todos</option>
                    <option value="cre">Creados</option>
                    <option value="exi">Existentes</option>
                </select>
                <Paginado
                    videoGamePerPage={videoGamePerPage} 
                    allVideoGames={allVideoGames.length} 
                    paginado={paginado}
                />
                {
                    
                //allVideoGames && allVideoGames?.map(e =>{
                currentVideoGames && currentVideoGames?.map(e =>{
                    return(
                        
                        <Link to={'/home/'+e.id}>
                            <Card 
                                name={e.name} 
                                image={e.image}
                                genres={e.genres}
                                rating={e.rating}
                            />
                        </Link>
                    )
                }
                )
                }
            </div>
        </div>
    )
}

