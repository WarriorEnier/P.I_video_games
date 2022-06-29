import React from "react";

export default function Paginado({videoGamePerPage, allVideoGames, paginado}){
    const pageNumbers = [];

    for(let i = 1; i<=Math.ceil(allVideoGames/videoGamePerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(num =>(
                    <li key = {num}>
                        <a onClick={()=>paginado(num)}>{num}</a>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}