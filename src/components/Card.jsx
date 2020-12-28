import React from "react";
import {Link}  from 'react-router-dom';

export default function Card(props) {
    return(  
    <div class="box">
        { props.dataFn.map((movie)=> {
            return(
            <Link to={`/detail/${movie.id}`}>
                <a href=""><img
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt=""/>
                </a>
            </Link>
            );   
        })}
    </div>
    );
       
}
