import React from "react";
import SearchForm from "./SearchForm";

export default function Navbar(props) {
    return (  
      <header>
                <div class="netflixLogo">
                <a id="logo" href="/">
                    <img
                        src="logonetflix.png"
                        alt="logon"    
                    />
                </a>
                </div>
                <nav class="main-nav">
                    <a href="/">Inicio</a>
                </nav>
                <nav class="sub-nav">
                    < SearchForm onResults={props.onResults} />
                </nav>
        </header>
        
    );
}
