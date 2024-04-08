import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TiposDos from "./TiposDos";
import { IoReturnUpBack } from "react-icons/io5";

function Tipos() {
    const [datos, setDatos] = useState({});
    let { id } = useParams();
    useEffect(() => {

        const {VITE_POKEAPI} = import.meta.env;
        const controller = new AbortController();
        const opciones = {
            method: 'Get',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal
        }

        fetch(VITE_POKEAPI + id, opciones)
            .then(res => res.json())
            .then(data => setDatos(data.sprites))
            .catch(err => console.log(err))
            .finally(() => controller.abort())

    }, [id]);

    return (
        <>
            <h2 className="tipo__h2">Datos de la PokéApi</h2>
            <div className="tipo__div">
                <img className="tipo__img" src={datos.front_default} alt="imagen pokemon" />
                <TiposDos />
                <button type="button" className="tipo__boton"><Link to={'/poke/'}className="tipo__link"><IoReturnUpBack />Anterior</Link></button>
            </div>

        </>
    )
}
export default Tipos;
