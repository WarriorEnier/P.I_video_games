import React,{ useEffect } from "react";
import { filterCreated, getVideoGames } from "../actions";
import { useDispatch } from "react-redux";

export default function Creado(){
    const dispatch = useDispatch();

    /*  useEffect(()=>{
        dispatch(getVideoGames());
    })  */

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

return(
    <>
    <select onChange={e => handleFilterCreated(e)}>
        <option value ='Todo'> Todos </option>
        <option value ='Creado'> Creado </option>
        <option value ='Api'> Api </option>
        
    </select>
    </>
)

}