import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TiposDos() {
    const [datos, setDatos] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const {VITE_POKEAPI} = import.meta.env;
        const controller = new AbortController();
        const opciones = {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal
        }

        fetch(VITE_POKEAPI  + id, opciones)
            .then(res => res.json())
            .then(data => setDatos(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())

    }, [id]);

    return (
        <>
            <div className="tipo__div">
                <p className="tipo__p"> <span>Nº de Orden: </span> {datos.order}</p>
                <p className="tipo__p"> <span>Nombre: </span> {datos.name}</p>
                <p className="tipo__p"> <span>Altura: </span> {datos.height}</p>
                <p className="tipo__p"> <span>Peso: </span> {datos.weight}</p>
                <p className="tipo__p"> <span>Experiencia base: </span> {datos.base_experience}</p>

            </div>

        </>
    )
}
export default TiposDos;
