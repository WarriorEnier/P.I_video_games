import React,{ useEffect, useState} from "react";
import { filterByOrdenamiento, getVideoGames} from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Ordenamiento({setCurrentPage}){
    const dispatch = useDispatch();
    const [orden, setOrden] = useState('')
    //const allVideoGames = useSelector((state) => state.allVideoGames)
   
    function handleFilterOrder(e){
        e.preventDefault();
        dispatch(filterByOrdenamiento(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return(
        <>
            <select onChange={e => handleFilterOrder(e)}>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
            </select>
        </>
    )
}

