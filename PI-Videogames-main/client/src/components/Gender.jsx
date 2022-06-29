import React from "react";
import { getGenres, filterByGenres } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Gender(){
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.genres);

    useEffect(()=>{
        dispatch(getGenres());
        dispatch(filterByGenres())
    },[])

    function handleFilterGenres(e){
        dispatch(filterByGenres(e.target.value))
    }
    return(
        <>
        <select onChange={e => handleFilterGenres(e)}>

            <option value ='Todos' > Todos </option>
            {allGenres.map((e, i) =>{
                return(
                <option value={e.name} key={i}>{e.name}</option>    
                )
            })}
        </select>
        </>
    )
}
