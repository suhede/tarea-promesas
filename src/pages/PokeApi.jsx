import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function PokeApi() {

    const [pokemon,setPokemon] = useState([]);

    useEffect(() => {
        const {VITE_POKEAPI} = import.meta.env;
        const controller = new AbortController();
        const opciones = {
            method: 'GET',
            headers: {
                 'Content-Type': 'application/json'
                 },
            signal: controller.signal
        };
        fetch(VITE_POKEAPI, opciones)
            .then(response => response.json())
            .then(data => setPokemon(data.results))
            .catch(err => console.log(err))
            .finally(() => controller.abort())

    }, []);
    return (
        <>
            <h2 className="poke__h2">PokéApi</h2>
            <h3 className="poke__h3" >Haz clic sobre el nombre de tu pokémon favorito</h3>
            <ul className="poke__ul" >
                {pokemon.map((dibujo , index) => 
                    
                    <li key={dibujo.name}> <Link to={'/poke/' + (index + 1)} className="poke__link">
                    <span>Pokemon: </span> {dibujo.name}</Link></li>
                )}
             </ul>   
        </>
    )
}
export default PokeApi;