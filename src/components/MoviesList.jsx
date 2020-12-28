import React from "react";
import Card from "./Card";

export default function MoviesList(props) {
    return (
        <section class="main-container">
            <div class="location" id="home">
                {props.results
                    ? <h1 >Resultados de la Busqueda:</h1>
                    : <h1 >Descubre en Netflix</h1>
                }
                {props.data
                    ? < Card dataFn = {
                        props.data
                    } />
                    : < Card dataFn = {
                        props.results
                    } />
                }
            </div>
        </section>
    );
}
