import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

function Clases() {
    const [usuarios, setUsuarios] = useState({});
    let { name } = useParams();

    useEffect(() => {
        const {VITE_DRAGONES} = import.meta.env;
        const controller = new AbortController();
        const opciones = {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(VITE_DRAGONES + name.toLowerCase(), opciones)
            .then(response => response.json())
            .then(data =>setUsuarios(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort());
    }, [name]);

    return (
        <>
            <h2 className="clase__h2">Clases</h2>

            <div className="clase__div">     
                <p className="clase__p"> <span>Nombre: </span> {usuarios.name}</p>
                <p className="clase__p"> <span>Tamaño:  </span>{usuarios.size}</p>
                <p className="clase__p"> <span>Tipo: </span> {usuarios.type}</p>
                <p className="clase__p"> <span>Alineación: </span> {usuarios.alignment}</p>
                <p className="clase__p"> <span>Carisma: </span> {usuarios.charisma}</p>
                <p className="clase__p"> <span>Inteligencia: </span> {usuarios.intelligence}</p>
                <p className="clase__p"> <span>Idioma:</span> {usuarios.languages}</p>
                <p className="clase__p"> <span>Fuerza: </span> {usuarios.strength}</p>
                <p className="clase__p"> <span>Desafios: </span> {usuarios.challenge_rating}</p>
                <div className="clase__box">
                </div>
                <button type="button" className="clase__boton"><Link to={'/item/'} className="clase__link"><IoReturnUpBack /> anterior</Link></button>
            </div>
          
        </>

    );
}

export default Clases;
