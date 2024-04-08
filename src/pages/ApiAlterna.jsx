import React, { useState, useEffect } from "react";

function ApiAlterna() {
    const [usuario,setUsuario] = useState([]);

    useEffect(() => {
        const {VITE_ALTERNA} = import.meta.env;
        const controller = new AbortController()
        const opciones = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json'
             },
            signal: controller.signal
        };

        fetch(VITE_ALTERNA, opciones)
            .then(response => response.json())
            .then(data => setUsuario(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())


    }, []);

    return (
        <>
            <h2 className="alt__h2">ApiAlterna</h2>
            <ul className="alt__ul" >
                {usuario.map((user)=>
                        <div  key={user.id}  className="alt__contenedor">
                                <img src={user.image} alt="imagen personaje" className="alt__img" />
                                <p className="alt__p"><span>Titulo: </span>{user.title}</p>
                                <p className="alt__p"><span>Año: </span>{user.year}</p>
                                <p className="alt__p"><span>Creador: </span>{user.creator}</p>
                                <p className="alt__p"><span>Genero: </span>{user.genre}</p> 
                                <p className="alt__p"><span>No.De Episodios: </span>{user.episodes}</p>   
                        </div>)}
            </ul>

        </>
    )
};
export default ApiAlterna;
