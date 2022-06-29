import React from 'react';

export default function Card({name, image, genres, rating}){
    return (
        <div>

            <h3>{name}</h3>
            <h5>{genres?.map((g, i) =>{
                return i ===genres.length-1?`${g.name}`:`${g.name} |`;

            })}</h5>
            <h5>{rating}</h5> 
            <img src={image} alt="imagen.jpg" width='200' height='200'/>

        </div>
    )
}